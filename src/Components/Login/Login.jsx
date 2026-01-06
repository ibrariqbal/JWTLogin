import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../api/apiData';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  
  const navigate = useNavigate();

  const handleSubmit = async () => {
    setError(""); 
    try {

      const { token, user } = await loginUser({ username, password });
      localStorage.setItem('jwtToken', token);
      localStorage.setItem('user', JSON.stringify(user));
      navigate('/dashboard');
    } catch (err) {
      setError(err.message); 
    }
  };

  return (
    <div className='login-main'>
      <div className='inner-login'>
        <h1>Login Page</h1>
        {error && (
          <p
            style={{
              color: 'orange',
              fontWeight: '800',
              fontSize: '19px',
              animation: 'shake 0.45s ease',
            }}
          >
            {error}
          </p>
        )}
        <input
          type='text'
          placeholder='Enter username...'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type='password'
          placeholder='Enter password...'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleSubmit} className='btn'>
          Submit
        </button>
      </div>
    </div>
  );
}
