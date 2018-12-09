import React, { Component } from 'react';
import './App.css';

import NavBar from './components/navbar/';
import CreatePublisher from './components/publisher/create/';

class App extends Component {

  panel = {
    addPublishers: <CreatePublisher />,
    home: <div>Oi</div>
  }

  constructor(props) {
    super(props);
    this.state = { route: 'home' };
  }

  changeRoute(route) {
    this.setState({
      route: route
    });
  }

  render() {
    let panel;

    if (this.panel[this.state.route]) {
      panel = this.panel[this.state.route];
    } else {
      panel = <div className="not-found">404 :(</div>
    }

    return (
      <div className="app">
        <NavBar onRouteChange={this.changeRoute.bind(this)} />
        <div className="container">
          { panel }
        </div>
      </div>
    );
  }
}

export default App;
