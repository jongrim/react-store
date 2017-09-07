import React, { Component } from 'react';
import '../css/App.css';
import Nav from './Nav';
import Store from './Store';
import { BrowserRouter as Router, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Nav />
          <Route
            exact
            path="/"
            render={() => {
              return <p>Hi</p>;
            }}
          />
          <Route path="/shop" component={Store} />
        </div>
      </Router>
    );
  }
}

export default App;
