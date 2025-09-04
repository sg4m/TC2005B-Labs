import React from 'react'
import { NavLink } from 'react-router-dom'

export const Layout = () => {
  return (
    <div>
        <nav>
            <ul>
                <li><NavLink to="/Homepage">Homepage</NavLink></li>
                <li><NavLink to="/Inicio">Inicio</NavLink></li>
                <li><NavLink to="/Login">Login</NavLink></li>
                <li><NavLink to="/Dashboard">Dashboard</NavLink></li>
                <li><NavLink to="/Reports">Reports</NavLink></li>
            </ul>
        </nav>
    </div>
  )
}
