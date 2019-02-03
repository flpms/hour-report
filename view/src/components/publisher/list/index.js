import React, { Component } from 'react';

const electron = window.require('electron');

class ListPublishers extends Component {
  constructor(props) {
    super(props);
    this.ipc = electron.ipcRenderer;
    this.state = {
      publishers: null
    };
    this.sendReadSignal();
  }

  componentWillMount() {
    this.listenReadPublishers();
  }

  sendReadSignal() {
    this.ipc.send('read-publishers');
  }

  listenReadPublishers() {
    this.ipc.on('read-publishers', (evt, publishers) => {
      console.log('received', publishers);
      this.setState({ publishers: publishers });
    });
  }

  render() {
    if (!this.state.publishers) {
      this.sendReadSignal();
      return (<div>Carregando...</div>);
    }

    const list = this.state.publishers.map((publishers, index) => {
      return <li className="list-group-item" key={index}>{publishers.name}</li>
    });

    return (<ul className="list-group">{list}</ul>)
  }
}

export default ListPublishers;
