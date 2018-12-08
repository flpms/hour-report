import React, { Component } from 'react';

class InputContainer extends Component {

  render() {
    return (<div className="form-group">
      <label htmlFor={this.props.attrKey}>{this.props.label}</label>
      <input className="form-control"
            type="text"
            id={this.props.attrKey}
            placeholder={this.props.placeholder}
            />
    </div>)
  }
}

export default InputContainer;
