import React, { useState } from 'react';
import axios from 'axios';
import './css/Login.css';
import './css/index.css';


const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
  
    const handleRegister = async () => {
      try {
        await axios.post('http://localhost:5000/api/register', { username, password });
        console.log('User registered successfully');
      } catch (error) {
        console.error('Error registering user:', error);
      }
    };
  
    const handleLogin = async () => {
      try {
        await axios.post('http://localhost:5000/api/login', { username, password });
        console.log('Login successful');
        window.location.href="./Home";
      } catch (error) {
        console.error('Error during login:', error);
      }
    };
  
    return (

      <div className='Content1'>
        <div className='Content2'>
          <h2>Register</h2>
          <input type="text" placeholder="Username" onChange={(e) => setUsername(e.target.value)} />
          <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
          <br/><br/>
          <button onClick={handleRegister}>Register</button>
          <br/><br/>
        </div>
        <div className='Content3'>
          <br/>
          <h2>Login</h2>
          <br/>
          <input type="text" placeholder="Username" onChange={(e) => setUsername(e.target.value)} />
          <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
          <br/><br/>
          <button onClick={handleLogin}>Login</button>
          <br/><br/>
        </div>
      </div>

    );
};

export default Login;
