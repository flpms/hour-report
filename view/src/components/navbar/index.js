import React, { Component } from 'react';

class NavBar extends Component {

  changeRoute(route, evt) {
    evt.preventDefault();
    this.props.onRouteChange(route);
  }

  render() {
    return (
      <nav className="navbar sticky-top navbar-expand-lg navbar-dark bg-dark">
        <span className="navbar-brand" onClick={e => this.changeRoute('home', e)}>
          Secretary Assistent
        </span>

        <button className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
                >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <span className="nav-link" onClick={e => this.changeRoute('hours', e)}>
                Horas
              </span>
            </li>
            <li className="nav-item">
              <span className="nav-link" onClick={e => this.changeRoute('publishers', e)}>
                Publicadores
              </span>
            </li>
            <li className="nav-item">
              <span className="nav-link" onClick={e => this.changeRoute('addPublishers', e)}>
                Cadastrar Publicadores
              </span>
            </li>
          </ul>
        </div>

        <form className="form-inline">
          <button className="btn btn-success"
                  type="button"
                  onClick={e => this.changeRoute('addHours', e)}
                  >
                  Cadastrar Horas
          </button>
        </form>
      </nav>
    );
  }
}

export default NavBar;
