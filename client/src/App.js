import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Login from "./components/Login";
import "./styles.scss";

import PrivateRoute from './utils/PrivateRoute';
import BubblePage from './components/BubblePage';

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={Login} />
        <PrivateRoute exact path='/protected' component={BubblePage} />
      </div>
    </Router>
  );
}

export default App;

// set up PrivateRoute and assigned that endpoint(?) to land on the BubblePage component


/* *  Explain what a token is used for.

If you are an app, your token is basically your golden ticket to the chocolate factory. The chocolate factory being the server of the website. Tokens are stored on the client side using local storage or session storage. 

*  What steps can you take in your web apps to keep your data secure?

Use HTTPS back end for all API calls. Make sure authentication expires after a set amount of time. Put API call limits on the server side.

*  Describe how web servers work.

When you go a website the browser looks at the first part http:// - this part indicates the document you want can be retrieved from a web server. HTTP is a language between browsers and servers. When you go to that website URL, the URL is the location of the resource of what you want to look up. 

*  Which HTTP methods can be mapped to the CRUD acronym that we use when interfacing with APIs/Servers.


Put requests. Put is the U in CRUD and means UPDATE. Delete requests are the D un CRUD. */