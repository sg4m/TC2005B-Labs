import React from 'react'
import { Link, NavLink } from 'react-router-dom';


export const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">

        <link classname="navbar-brand" to="/">Asociaciones</link>

        <div classname="navbar-collapse">
            <div classname="navbar-nav">
                <NavLink classname="nav-item nav-link" to="/Inicio">Inicio</NavLink>
                <NavLink classname="nav-item nav-link" to="/Login">Login</NavLink>
            </div>
        </div>

        <div classname="navbar-collapse collapse w-100 order-3 dual-collapse2">
            <ul classname="navbar-nav ml-auto">
                <NavLink classname="nav-item nav-link" to="/Perfil">Perfil</NavLink>
            </ul>
        </div>
    </nav>
  )
}
