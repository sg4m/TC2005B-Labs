
import React from 'react';
import { Outlet, NavLink, useNavigate } from 'react-router-dom';

export const Layout = ({ isAuthenticated, setIsAuthenticated }) => {
    const navigate = useNavigate();

    const handleLogout = () => {
        setIsAuthenticated(false);
        navigate('/Login');
    };

    return (
        <div>
            <header>
                <h2>Routes</h2>
            </header>
            <nav>
                <ul style={{ display: 'flex', gap: '1rem', listStyle: 'none', padding: 0 }}>
                    <li><NavLink to="/Homepage">Homepage</NavLink></li>
                    <li><NavLink to="/Reports">Reports</NavLink></li>
                    <li><NavLink to="/Dashboard">Dashboard</NavLink></li>
                    {!isAuthenticated ? (
                        <li><NavLink to="/Login">Login</NavLink></li>
                    ) : (
                        <li><button onClick={handleLogout}>Logout</button></li>
                    )}
                </ul>
            </nav>
            <main>
                <Outlet />
            </main>
            <footer>
                <small>© 2025 Simple React App</small>
            </footer>
        </div>
    );
};
