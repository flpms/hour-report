import React, { Component } from 'react';
import './App.css';

import NavBar from './components/navbar/';
import CreatePublisher from './components/publisher/create/';

class App extends Component {

  changeRoute(route) {
    console.log('= = = route is', route);
  }

  render() {
    return (
      <div className="app">
        <NavBar onRouteChange={this.changeRoute} />
        <div className="container">
          <CreatePublisher />
        </div>
      </div>
    );
  }
}

export default App;
