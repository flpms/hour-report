import React, { Component } from 'react';

class InputContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.onChange = this.onChange.bind(this);
  }

  onChange(key, event) {
    this.setState({ value: event.target.value });
    this.props.onChange(key, event.target.value);
  }

  render() {
    return (<div className="form-group">
      <label htmlFor={this.props.attrKey}>{this.props.label}</label>
      <input className="form-control"
            type="text"
            id={this.props.attrKey}
            placeholder={this.props.placeholder}
            onChange={(e) => this.onChange(this.props.attrKey, e)}
            value={this.state.value}
            />
    </div>)
  }
}

export default InputContainer;
