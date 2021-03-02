//dependencies
import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
//components
import Layout from "./components/layout/Layout";
import Home from "./containers/Home/Home";
import MyProjects from "./containers/MyProjects/MyProjects";
import AboutMe from "./containers/AboutMe/AboutMe";
import ContactMe from "./containers/ContactMe/ContactMe";
import NotFound from "./containers/NotFound/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/projects" component={MyProjects} />
          <Route exact path="/about" component={AboutMe} />
          <Route exact path="/contact" component={ContactMe} />
          <Route component={NotFound} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
