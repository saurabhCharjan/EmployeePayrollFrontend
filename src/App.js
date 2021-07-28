import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Register from './pages/register'
import Login from './pages/login';
import Dashboard from './components/dashboard'

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
      </Switch>
      <Route path="/dashboard" component={Dashboard} />
    </div>
  </BrowserRouter>
  );
}
export default App;
