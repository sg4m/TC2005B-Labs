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
      <Layout>
        <Routes>
          <Route path='/' element={<Homepage/>}/>
          <Route path='/dashboard' element={<Dashboard/>}/>
          <Route path='/reports' element={<Reports/>}/>
          <Route path='/login' element={<Login/>}/>
        </Routes>
      </Layout>
    </div>
  );
}

export default App
