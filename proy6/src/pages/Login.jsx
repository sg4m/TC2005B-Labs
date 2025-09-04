import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const Login = () => {

  const [username, setUsername] = useState('');
  const navigate = useNavigate();

  const onLogin = () => {
    navigate('/Perfil');
  };

    return (
    <div>
      <h1>Login page</h1>
      <input type="text" placeholder="Username" value={username}
      onChange={ (e) => setUsername(e.target.value)} 
      />
      <button onClick={onLogin}>Login</button>
    </div>
  )
}