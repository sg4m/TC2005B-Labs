'use client'

import Image from "next/image";
import { useEffect, useState} from 'react';
import { db } from "../../firebase/firebase.config";
import { addDoc, collection, getDocs, deleteDoc, doc, updateDoc} from "firebase/firestore";

export default function Home() {



    const [inputText, setInputText] = useState("");
    const [items, setItems] = useState<any>([]);

    const handleAdd = async () => {
      await addDoc(collection(db, 'items'), {inputText})
      setInputText('');
      fetchItems();
    }

    const fetchItems = async () => {
      const snapshot = await getDocs(collection(db, 'items'))
      setItems(snapshot.docs.map((doc) => ({id : doc.id, inputText: doc.data().inputText})))
    }

    const handleEdit = async (id) => {
      const editValue = prompt("Enter the new value");
      if(!editValue) return;
      await updateDoc(doc(db,'items', id), {inputText: editValue})
      fetchItems();
    }

    const handleDelete = async (id) => {
      if(!id) return;
      await deleteDoc(doc(db, 'items', id));
      fetchItems();
    }


  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <h1> CRUD con NEXTJS</h1>
      <div>
        <input type="text" className="border-2" placeholder="nombre" value={inputText} onChange={(e)=> setInputText(e.target.value)}></input>
        <button className="boder-2" onClick={(handleAdd)}>Agregar</button>
      </div>
      <div>
        <table>
          <thead>
            <tr>
              <th scope="col">Items</th>
              <th scope="col" colSpan={2}>Acciones</th>
            </tr>
          </thead>
          {items.map((item:any) => <li key={item.inputText}>{item.inputText}
            <td><button className="p-2 border bg-red-500 text-while cursor-pointer" onClick={() => {handleEdit(item.id)}}>Editar</button></td>
            <td><button className="p-2 border bg-red-500 text-while cursor-pointer" onClick={() => {handleDelete(item.id)}}>Eliminar</button></td>

          </li>
          )}
        </table>
      </div>
    </div>
  );
}
