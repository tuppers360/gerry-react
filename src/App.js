import React, { Component } from "react";
import "./App.css";
import NavBar from "./Components/navBar";
import { Route, Switch } from "react-router-dom";
import { Home } from "./Components/home";
import { About } from "./Components/about";
import { Contact } from "./Components/contact";
import { Portfolio } from "./Components/portfolio";
import { NoMatch } from "./Components/noMatch";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <main className="container">
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
