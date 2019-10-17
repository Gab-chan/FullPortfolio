import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/home.js";
import Portfolio from "./pages/portfolio.js";
import Nav from "./components/Nav";

function App() {
  return (
    <Router>
      <Nav />
        <Route exact path="/" component={Home} />
        <Route exact path="/portfolio" component={Portfolio} />

    </Router>
  );
}

export default App;
