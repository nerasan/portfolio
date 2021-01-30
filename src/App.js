import React from "react";
// React Router
import { Route } from "react-router-dom"
// Components imports
import Home from "./components/Home";
import About from "./components/About";
import Resume from "./components/Resume";
import Projects from "./components/Projects"
// import resumePDF from "/Users/salimaharun/Desktop/SEIFX818/portfolio-salima/src/salima-harun-resume.pdf"

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