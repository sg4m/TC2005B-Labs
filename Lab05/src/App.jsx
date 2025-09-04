import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route } from 'react-router-dom'

import { Layout } from './pages/Layout'
import { Homepage } from './pages/Homepage'
import { Dashboard } from './pages/Dashboard'
import { Reports } from './pages/Reports'
import { Login } from './pages/Login'

function App() {
  

  return (
    <div>
      <h1>Routes</h1>
      <Layout />
        <Routes>
          <Route path='/' element={<Homepage/>}></Route>
          <Route path='/Dashboard' element={<Dashboard/>}></Route>
          <Route path='/Reports' element={<Reports/>}></Route>
          <Route path='/Login' element={<Login/>}></Route>
        </Routes>
    </div>
  );
}

export default App
