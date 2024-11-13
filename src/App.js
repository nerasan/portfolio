import React from "react";

import { Route } from "react-router-dom";

import Home from "./components/Home";
import About from "./components/About";
import Resume from "./components/Resume";
import Projects from "./components/Projects";

import Layout from "./components/common/Layout";

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