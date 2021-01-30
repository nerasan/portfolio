import React from "react";
// React Router
import { Route } from "react-router-dom"
// Components imports
import Home from "./components/Home";
import About from "./components/About";
import Resume from "./components/Resume";
import Projects from "./components/Projects"

// Common imports
import Layout from "./components/common/Layout"

// CSS imports 
import "./css/App.css";

const App = () => {
    return (
      <div className="App">
        <Layout>
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={About} />
          <Route path="/resume" exact component={Resume} />
          <Route path="/projects" exact component={Projects} />
        </Layout>
      </div>
    );
  }

export default App;

// components folder -- your pages
// common folder -- everything that can be reused in your website and can be used in other pages
// example: layout (header, nav, footer, etc.) -- things that do not need to change