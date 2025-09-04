
import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

export const Login = ({ setIsAuthenticated }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const location = useLocation();

    const onLogin = () => {
        if (username === 'admin' && password === 'admin') {
            setIsAuthenticated(true);
            const from = location.state?.from?.pathname || '/Dashboard';
            navigate(from, { replace: true });
        } else {
            alert('Invalid credentials');
        }
    };

    return (
        <div>
            <h1>Login</h1>
            <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={onLogin}>Login</button>
            <p>Use <b>admin</b> / <b>admin</b> to log in.</p>
        </div>
    );
};
