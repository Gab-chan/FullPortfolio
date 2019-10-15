import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/home.js";
// import Projects from "./pages/projects.js";
import Nav from "./components/Nav";

function App() {
  return (
    <Router>
      <Nav />
        <Route exact path="/" component={Home} />
        {/* <Route exact path="/Projects" component={Projects} /> */}

    </Router>
  );
}

export default App;
