import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

export const Login = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const onLogin = () => {
        if(username === 'admin' && password === 'admin') {
            navigate('/Dashboard');
        }
        else {
            alert('Invalid credentials');
        }
    };

  return (
    <div>
        <h1>Login Page</h1>
        <input type="text" placeholder="Username" value ={username}
        onChange={ (e) => setUsername(e.target.value)}/>
        <input type="password" placeholder="Password" value ={password}
        onChange={ (e) => setPassword(e.target.value)}/>
        <buton onClick={onLogin}>Login</buton> 
    </div>
  )
}
