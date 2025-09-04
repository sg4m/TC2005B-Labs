import React from 'react'
import { Outlet, NavLink } from 'react-router-dom'

export const Layout = () => {
  return <div>
    <nav>
        <ul>
            <li><NavLink to="/">Inicio</NavLink></li>
            <li><NavLink to="/Login">Login</NavLink></li>
            <li><NavLink to="/Perfil">Perfil</NavLink></li>
        </ul>
    </nav>
    <Outlet/>      
    </div>;
}
