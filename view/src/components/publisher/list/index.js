import React, { Component } from 'react';

const electron = window.require('electron');

class ListPublishers extends Component {
  constructor(props) {
    super(props);
    this.ipc = electron.ipcRenderer;
    this.state = {
      publishers: null
    };
    this.ipc.send('read-publishers');
  }

  componentWillMount() {
    this.listenReadPublishers();
  }

  listenReadPublishers() {
    this.ipc.on('read-publishers', (evt, publishers) => {
      this.setState({ publishers: publishers });
    });
  }

  render() {
    if (!this.state.publishers) {
      return (<div>Carregando...</div>);
    }

    let list;
    //
    this.state.publishers.forEach((publishers) => {
      list = <li className="list-group-item">{publishers.name}</li>
    });

    return (<ul className="list-group">{list}</ul>)
  }
}

export default ListPublishers;
