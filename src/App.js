import React, { Component } from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Nav from "./components/Nav";
import Battle from "./components/Battle";
import Results from "./components/Results";
import Popular from "./components/Popular";
import configureStore from "./configureStore";

const store = configureStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className="container">
            <Nav />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/battle" component={Battle} />
              <Route path="/battle/results" component={Results} />
              <Route path="/popular" component={Popular} />
              <Route
                render={() => {
                  return <p>Not found</p>;
                }}
              />
            </Switch>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
