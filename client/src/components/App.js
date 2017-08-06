import React, { Component } from 'react';
import '../css/App.css';
import Store from './Store';
import { BrowserRouter as Router, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Route path="/shop" component={Store} />
        </Router>
      </div>
    );
  }
}

export default App;
