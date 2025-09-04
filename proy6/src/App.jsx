import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route } from 'react-router-dom';


import { Inicio } from './pages/Inicio';
import { Layout } from './pages/Layout';
import { Login } from './pages/Login';
import { Perfil } from './pages/Perfil';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1>Routes</h1>
    <Layout />
      <Routes>
        <Route path="/" element={ <Layout/> }></Route>
          <Route path="Inicio" element={ <Inicio/>}></Route>
          <Route path="Perfil" element={ <Perfil/>}></Route>
          <Route path="Login" element={ <Login/> }></Route>
      </Routes>    
    </div>
  );
}

export default App
