import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...rest }) => (

  <Route 
    {...rest}
    render={props => 
      localStorage.getItem('token') ? (
      <Component {...props} />
      ) : (
      <Redirect to='/login' />)
    }
  />
)

export default PrivateRoute;

// set up PrivateRoute function
// ...rest passed in the REST of this components props
// line- 9,10 - if local storage has our token then render the component
// line 12, if local storage does not have the token, redirect to login page