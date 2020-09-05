import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./views/Home";
import About from "./views/About";
import Category from "./views/Category";
import "./index.css";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/about">
          <About></About>
        </Route>
        <Route path="/category/:id">
          <Category></Category>
        </Route>
        <Route path="/">
          <Home></Home>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
