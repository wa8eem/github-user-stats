import React from "react";
import { Dashboard, Login, PrivateRoute, AuthWrapper, Error } from "./pages";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Router path='/'>
        <Dashboard></Dashboard>
      </Router>
      <Router path='/login'>
        <Login />
      </Router>
    </div>
  );
}

export default App;
