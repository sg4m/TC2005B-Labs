import React, { useState } from "react";
import "./App.css";
import CryptoJS from "crypto-js";

const SALT_BYTES = 16;
const IV_BYTES = 16;
const PBKDF2_ITER = 10000; 

function encryptWithPassphrase(plainText, passphrase) {
  const salt = CryptoJS.lib.WordArray.random(SALT_BYTES);
  const iv = CryptoJS.lib.WordArray.random(IV_BYTES);

  const key = CryptoJS.PBKDF2(passphrase, salt, {
    keySize: 256 / 32,
    iterations: PBKDF2_ITER,
    hasher: CryptoJS.algo.SHA256,
  });

  const encrypted = CryptoJS.AES.encrypt(plainText, key, { iv: iv });

  const saltB64 = CryptoJS.enc.Base64.stringify(salt);
  const ivB64 = CryptoJS.enc.Base64.stringify(iv);
  const cipherB64 = CryptoJS.enc.Base64.stringify(encrypted.ciphertext);

  return `${saltB64}:${ivB64}:${cipherB64}`;
}

function decryptWithPassphrase(b64str, passphrase) {
  const parts = b64str.split(":");
  if (parts.length !== 3) throw new Error("Invalid ciphertext format");
  const [saltB64, ivB64, cipherB64] = parts;

  const salt = CryptoJS.enc.Base64.parse(saltB64);
  const iv = CryptoJS.enc.Base64.parse(ivB64);
  const cipherParams = CryptoJS.lib.CipherParams.create({ ciphertext: CryptoJS.enc.Base64.parse(cipherB64) });

  const key = CryptoJS.PBKDF2(passphrase, salt, {
    keySize: 256 / 32,
    iterations: PBKDF2_ITER,
    hasher: CryptoJS.algo.SHA256,
  });

  const decrypted = CryptoJS.AES.decrypt(cipherParams, key, { iv: iv });
  const result = decrypted.toString(CryptoJS.enc.Utf8);
  if (!result) throw new Error("Decryption failed (bad passphrase or corrupted data)");
  return result;
}

export default function Cipher() {
  const [passphrase, setPassphrase] = useState("demo");
  const [plain, setPlain] = useState("");
  const [cipher, setCipher] = useState("");
  const [error, setError] = useState("");

  // When plaintext changes, encrypt and set cipher
  async function onPlainChange(e) {
    const p = e.target.value;
    setPlain(p);
    setError("");
    try {
      if (p === "") {
        setCipher("");
        return;
      }
      const c = await encryptWithPassphrase(p, passphrase);
      setCipher(c);
    } catch (err) {
      setError(err.message || String(err));
    }
  }

  // When cipher changes, try to decrypt
  async function onCipherChange(e) {
    const c = e.target.value;
    setCipher(c);
    setError("");
    try {
      if (c === "") {
        setPlain("");
        return;
      }
      const p = await decryptWithPassphrase(c, passphrase);
      setPlain(p);
    } catch (err) {
      setError("Could not decrypt with current passphrase");
    }
  }

  function onPassphraseChange(e) {
    const p = e.target.value;
    setPassphrase(p);
    // don't auto-re-encrypt here to avoid confusion; user can edit plaintext to re-encrypt
  }

  return (
    <div className="cipher-container" style={{ maxWidth: 700, margin: "2rem auto", padding: 20 }}>
      <h2>Lab 08</h2>

      <label htmlFor="pass">Passphrase</label>
      <input
        id="pass"
        type="password"
        value={passphrase}
        onChange={onPassphraseChange}
        placeholder="Introduce la frase de paso (demo)"
        style={{ width: "100%", padding: 8, marginBottom: 12 }}
      />

      <label htmlFor="plain">Texto sin cifrar</label>
      <textarea
        id="plain"
        value={plain}
        onChange={onPlainChange}
        placeholder="Escribe el texto aquí para cifrar"
        rows={4}
        style={{ width: "100%", padding: 8, marginBottom: 12 }}
      />

      <label htmlFor="cipher">Texto cifrado</label>
      <textarea
        id="cipher"
        value={cipher}
        onChange={onCipherChange}
        placeholder="El texto cifrado aparecerá aquí; pega el texto cifrado para descifrar"
        rows={6}
        style={{ width: "100%", padding: 8, marginBottom: 12 }}
      />

      {error && (
        <div style={{ color: "#a00", marginTop: 8 }}>
          <strong>Error:</strong> {error}
        </div>
      )}

    </div>
  );
}

