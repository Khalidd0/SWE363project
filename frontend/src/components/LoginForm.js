import React, { useState } from 'react';
import Messages from './Messages';

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    if(email === 'student@kfupm.edu' && password === '123456') {
      setMessage('Login successful!');
    } else {
      setMessage('Invalid credentials');
    }
  };

  return (
    <div className="login-form">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input 
          type="email" placeholder="Email" 
          value={email} onChange={e => setEmail(e.target.value)} required
        />
        <input 
          type="password" placeholder="Password" 
          value={password} onChange={e => setPassword(e.target.value)} required
        />
        <button type="submit">Login</button>
      </form>
      <Messages message={message} />
    </div>
  );
}
