import React, { Component } from 'react';

import InputContainer from './../../commons/input-container/index.js';

class CreatePublisher extends Component {

  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {};
  }

  handleSubmit(evt) {
    console.log(this.state);
    evt.preventDefault();
  }

  handleInputChange(key, value) {
    console.log(key, value);
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
                          type="radio"
                          value="m"
                          name="sex"
                          />
                  <label className="form-check-label">Masculino</label>
                </div>

                <div className="form-check form-check-inline">
                  <input className="form-check-input"
                          type="radio"
                          value="f"
                          name="sex"
                          />
                  <label className="form-check-label">Feminino</label>
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
                              placeholder="25/05/02"
                              onChange={this.handleInputChange.bind(this)}
                              />
            </div>
          </div>

          <div className="row">
            <div className="form-group col">
              <p>Ungido ou das Outras Ovelhas</p>
              <div className="form-check form-check-inline">
                <input className="form-check-input"
                        type="radio"
                        value="true"
                        name="os"
                        />
                <label className="form-check-label">Ungido</label>
              </div>

              <div className="form-check form-check-inline">
                <input className="form-check-input"
                        type="radio"
                        value="false"
                        name="os"
                        />
                <label className="form-check-label">Outras Ovelhas</label>
              </div>
            </div>

            <div className="form-group col">
              <p>Privilégio de serviço</p>
              <div className="form-group form-check-inline">
                <div className="custom-control custom-checkbox">
                  <input className="form-check-input"
                          type="checkbox"
                          value="regular-pionner"
                          name="ps"
                          />
                  <label className="form-check-label">Pioneiro Regular</label>
                </div>

                <div className="custom-control custom-checkbox">
                  <input className="form-check-input"
                          type="checkbox"
                          value="ministerial-servant"
                          name="ps"
                          />
                  <label className="form-check-label">Servo Ministerial</label>
                </div>

                <div className="custom-control custom-checkbox">
                  <input className="form-check-input"
                          type="checkbox"
                          value="elder"
                          name="ps"
                          />
                  <label className="form-check-label">Ancião</label>
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
