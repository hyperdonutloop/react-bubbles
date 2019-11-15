import React, { useState } from "react";
import { axiosWithAuth } from '../utils/axiosWithAuth';

const Login = (props) => {
  const [ credentials, setCredentials ] = useState({
    username: 'Ryan',
    password: '1234'
  })

  const handleChange = e => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value })
  };

  const login = e => {
    e.preventDefault();
    axiosWithAuth()
    .post('/api/login', credentials)
    .then(response => {
      localStorage.setItem('token', response.data.payload);
      props.history.push('/protected');
    })
    .catch(error => {
      console.log('this did not work', error); 
    })

  };
  
  return (
    <>
      <h1>Welcome to the Bubble App!</h1>
      <form onSubmit={login}>
        <input
          type='text'
          name='username'
          placeholder='username here'
          onChange={handleChange}
        />
         <input
          type='text'
          name='password'
          placeholder='password here' 
          onChange={handleChange}
        />
        <button>Login</button>
      </form>
    </>
  );
};

export default Login;
