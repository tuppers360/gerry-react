import React, { Component } from "react";
import NavBar from "./components/navBar";
import { Route, Switch } from "react-router-dom";
import { Home } from "./components/home";
import { About } from "./components/about";
import { Contact } from "./components/contact";
import { Portfolio } from "./components/portfolio";
import { NoMatch } from "./components/noMatch";
import "./App.css";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <main>
          <Switch>
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/portfolio" component={Portfolio} />
            <Route path="/" component={Home} />
            <Route component={NoMatch}></Route>
          </Switch>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
