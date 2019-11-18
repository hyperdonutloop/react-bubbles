import React, { useState } from "react";
import { axiosWithAuth } from '../utils/axiosWithAuth';

/*
Stage 1- Authentication 

Construct an AXIOS request to retrieve a token from the server. You'll use this token to interact with the API ✅
Save the token to localStorage ✅
Build a axiosWithAuth module to create an instance of axios with the authentication header ✅
Build a PrivateRoute component and use it to protect a route that renders the BubblesPage component ✅


*/

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
      // after token has been authenticated we route this login to the protected web page
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
