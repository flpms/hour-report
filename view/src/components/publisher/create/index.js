import React, { Component } from 'react';

import InputContainer from './../../commons/input-container/';
import RadioButtonContainer from './../../commons/radio-button-container/';
import CheckboxContainer from './../../commons/checkbox-container/';

const electron = window.require('electron');

class CreatePublisher extends Component {

  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {};

    this.ipc = electron.ipcRenderer;
  }

  handleSubmit(evt) {
    this.ipc.send('create-publisher', JSON.stringify(this.state));
    evt.preventDefault();
  }

  handleInputChange(key, value) {
    this.setState({[key]: value});
  }

  render() {
    return (
      <div>
        <h2>Cadastro de Publicador</h2>
        <form onSubmit={this.handleSubmit}>
          <div className="row">
            <InputContainer
              attrKey="publisher-name"
              label="Nome"
              placeholder="José da Silva"
              onChange={this.handleInputChange.bind(this)}
            />

            <RadioButtonContainer
              title="Sexo"
              attrKey="publisher-sex"
              onChange={this.handleInputChange.bind(this)}
              options={[
                {
                  id: 'male-sex',
                  value: 'm',
                  label: 'Masculino'
                },
                {
                  id: 'female-sex',
                  value: 'm',
                  label: 'Feminino'
                }
              ]}
            />
          </div>

          <div className="row">
            <InputContainer
              attrKey="publisher-address"
              label="Endereço"
              placeholder="R. Brasil, 273/254D - Jd. Vila Velha - Barueri - SP"
              onChange={this.handleInputChange.bind(this)}
            />
          </div>

          <div className="row">
            <InputContainer
              attrKey="publisher-phone"
              label="Telefone"
              placeholder="(11) 913 324 657"
              onChange={this.handleInputChange.bind(this)}
            />

            <InputContainer
              attrKey="publisher-email"
              label="Email"
              placeholder="nome@provedor.com"
              onChange={this.handleInputChange.bind(this)}
              />
          </div>

          <div className="row">
            <InputContainer
              attrKey="publisher-birthdate"
              label="Data de Nascimento"
              placeholder="06/07/1989"
              onChange={this.handleInputChange.bind(this)}
            />

            <InputContainer
              attrKey="publisher-immersion"
              label="Data de Imersão"
              placeholder="25/05/2002"
              onChange={this.handleInputChange.bind(this)}
            />
          </div>

          <div className="row">
            <RadioButtonContainer
              title="Ungido ou das Outras Ovelhas"
              attrKey="other-sheep"
              onChange={this.handleInputChange.bind(this)}
              options={[
                {
                  id: 'anointedOne',
                  value: true,
                  label: 'Ungido'
                },
                {
                  id: 'otherSheep',
                  value: false,
                  label: 'Outras Ovelhas'
                }
              ]}
            />

            <CheckboxContainer
              title="Privilégios de serviço"
              attrKey="ps"
              onChange={ this.handleInputChange.bind(this) }
              checks={[
                {
                  id: 'regular-pionner',
                  label: 'Ungido'
                },
                {
                  id: 'ministerial-servant',
                  label: 'Servo Ministerial'
                },
                {
                  id: 'elder',
                  label: 'Ancião'
                }
              ]}
            />
          </div>

          <div className="offset-md-9 d-flex flex-row-reverse justify-content-around">
            <button type="submit" className="btn btn-outline-primary">Salvar</button>
            <button type="submit" className="btn btn-outline-secondary">Cadastrar Outro</button>
          </div>
        </form>
      </div>);
  }
}

export default CreatePublisher;
