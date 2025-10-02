import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import crypto from 'crypto'


function App() {

  const msg = "Hola";

  const hashing = crypto.createHash("sha512");

  const hash = hashing.update(msg).digest("base64url");

  console.log(hash);

  return (
    <>

    </>
  )
};


export default App
