import React, { Component } from 'react';

import InputContainer from './../../commons/input-container/index.js';

const electron = window.require('electron');

class CreatePublisher extends Component {

  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {};

    this.ipc = electron.ipcRenderer;
  }

  handleSubmit(evt) {
    console.log(this.state);
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
            <div className="col">
              <InputContainer attrKey="publisher-name"
                                label="Nome"
                                placeholder="José da Silva"
                                onChange={this.handleInputChange.bind(this)}
                                />
            </div>

            <div className="col">
              <p>Sexo</p>
              <div className="form-group">
                <div className="form-check form-check-inline">
                  <input className="form-check-input"
                          id="male-sex"
                          type="radio"
                          value="m"
                          name="sex"
                          onChange={
                            e => this.handleInputChange.apply(this, ['publisher-sex', e.target.value])
                          }/>
                  <label className="form-check-label" htmlFor="male-sex">Masculino</label>
                </div>

                <div className="form-check form-check-inline">
                  <input className="form-check-input"
                          id="female-sex"
                          type="radio"
                          value="f"
                          name="sex"
                          onChange={
                            e => this.handleInputChange.apply(this, ['publisher-sex', e.target.value])
                          }/>
                  <label className="form-check-label" htmlFor="female-sex">Feminino</label>
                </div>
              </div>
            </div>
          </div>

          <InputContainer attrKey="publisher-address"
                          label="Endereço"
                          placeholder="R. Brasil, 273/254D - Jd. Vila Velha - Barueri - SP"
                          onChange={this.handleInputChange.bind(this)}
                          />

          <div className="row">
            <div className="col">
              <InputContainer attrKey="publisher-phone"
                              label="Telefone"
                              placeholder="(11) 913 324 657"
                              onChange={this.handleInputChange.bind(this)}
                              />
            </div>
            <div className="col">
              <InputContainer attrKey="publisher-email"
                              label="Email"
                              placeholder="nome@provedor.com"
                              onChange={this.handleInputChange.bind(this)}
                              />
            </div>
          </div>

          <div className="row">
            <div className="col">
              <InputContainer attrKey="publisher-birthdate"
                              label="Data de Nascimento"
                              placeholder="06/07/1989"
                              onChange={this.handleInputChange.bind(this)}
                              />
            </div>

            <div className="col">
              <InputContainer attrKey="publisher-immersion"
                              label="Data de Imersão"
                              placeholder="25/05/2002"
                              onChange={this.handleInputChange.bind(this)}
                              />
            </div>
          </div>

          <div className="row">
            <div className="form-group col">
              <p>Ungido ou das Outras Ovelhas</p>
              <div className="form-check form-check-inline">
                <input id="anointedOne"
                        className="form-check-input"
                        type="radio"
                        value="true"
                        name="os"
                        onChange={
                          e => this.handleInputChange.apply(this, ['other-sheep', e.target.value])
                        }/>
                <label className="form-check-label" htmlFor="anointedOne">Ungido</label>
              </div>

              <div className="form-check form-check-inline">
                <input id="otherSheep"
                        className="form-check-input"
                        type="radio"
                        value="false"
                        name="os"
                        onChange={
                          e => this.handleInputChange.apply(this, ['other-sheep', e.target.value])
                        }/>
                <label className="form-check-label" htmlFor="otherSheep">Outras Ovelhas</label>
              </div>
            </div>

            <div className="form-group col">
              <p>Privilégio de serviço</p>
              <div className="form-group form-check-inline">
                <div className="custom-control custom-checkbox">
                  <input id="regularPionner"
                          className="form-check-input"
                          type="checkbox"
                          value="regular-pionner"
                          name="ps"
                          onChange={
                            e => this.handleInputChange.apply(this, ['regular-pionner', e.target.checked])
                          }/>
                  <label className="form-check-label" htmlFor="regularPionner">Pioneiro Regular</label>
                </div>

                <div className="custom-control custom-checkbox">
                  <input id="ministerialServant"
                          className="form-check-input"
                          type="checkbox"
                          value="ministerial-servant"
                          name="ps"
                          onChange={
                            e => this.handleInputChange.apply(this, ['ministerial-servant', e.target.checked])
                          }/>
                  <label className="form-check-label" htmlFor="ministerialServant">Servo Ministerial</label>
                </div>

                <div className="custom-control custom-checkbox">
                  <input id="elder"
                          className="form-check-input"
                          type="checkbox"
                          value="elder"
                          name="ps"
                          onChange={
                            e => this.handleInputChange.apply(this, ['elder', e.target.checked])
                          }/>
                  <label className="form-check-label" htmlFor="elder">Ancião</label>
                </div>
              </div>
            </div>
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
