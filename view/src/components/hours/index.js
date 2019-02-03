import React, { Component } from 'react';

const electron =  window.require('electron');

import InputContainer from './../../commons/input-container/';
import RadioButtonContainer from './../../commons/radio-button-container/';
import SelectComponent from './../../commons/select-component/'

class CreatePublisher extends Component {

  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {};
    this.ipc = electron.ipcRenderer;

    this.sendReadSignal();
  }

  componentWillMount() {
    this.listenReadPublishers();
  }

  sendReadSignal() {
    this.ipc.send('read-publishers');
  }

  handleSubmit(evt) {s
    this.ipc.send('create-hours', JSON.stringify(this.state));
    evt.preventDefault();
  }

  handleInputChange(key, value) {
    this.setState({[key]: value});
  }

  render() {
    return (
      <div>
        <h2>Cadastro de horas</h2>

      </div>);
  }
}

export default CreatePublisher;
