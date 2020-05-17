import React from "react";
// import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import Home from "./pages/Home";
import Footer from "./components/Footer/Footer";
import Projects from "./pages/Projects";

function App() {
  return (
    <>
      <Router>
        <div>
          <Nav />
          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route exact path="/Home" component={Home}/>
            <Route exact path="/Projects" component={Projects} />
            {/* <Route path="/contact" component={Contact}/> */}
          </Switch>
        </div>
      </Router>

      {/* <Footer /> */}
    </>
  );
}

export default App;
