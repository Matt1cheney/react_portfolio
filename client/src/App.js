import React from 'react';
import './App.css';
import {  BrowserRouter as Router, Route, Switch,} from "react-router-dom";
import Nav from './components/Nav/Nav';
import Home from "./pages/home";

function App() {
  return (

    <Router>
     <Nav/>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/" component={Home}/>
        </Switch>
    </Router>
  );
}


export default App;
