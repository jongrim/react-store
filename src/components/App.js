import React, { Component } from 'react';
import Nav from './Nav';
import Store from './Store';
import BookDetail from './BookDetail.js';
import { BrowserRouter as Router, Route } from 'react-router-dom';

const appStyle = {
  display: 'flex',
  flexDirection: 'column',
  fontFamily: "'Raleway', 'Quicksand', sans-serif",
  height: '100%'
};

class App extends Component {
  render() {
    return (
      <Router>
        <div style={appStyle}>
          <Nav />
          <Route exact path="/" render={() => <p>Hi</p>} />
          <Route path="/shop" component={Store} />
          <Route path="/books/:id" component={BookDetail} />
          <Route path="/games/:id" />
          <Route path="/movies/:id" />
        </div>
      </Router>
    );
  }
}

export default App;
