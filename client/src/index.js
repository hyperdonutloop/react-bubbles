import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router } from 'react-router-dom';

const rootElement = document.getElementById("root");
ReactDOM.render(
<Router>
  <App />
</Router>,
 rootElement);

 // surrounded app by Router so the entire app has use of Router capabilities