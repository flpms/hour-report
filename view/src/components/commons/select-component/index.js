import React, { Component } from 'react';

class SelectComponent extends Component {

  constructor(props) {
    super(props);
    this.state = { value: '' };
    this.onChange = this.onChange.bind(this);
  }

  onChange(key, value) {
    this.setState({ key, value });
    this.props.onChange(key, value);
  }

  get options() {
    return this.props.options.map(item => <option value={ item.value }>{ item.label }</option>);
  }

  render() {
    return <div>
      <label htmlFor={this.props.id}>{this.props.label}</label>
      <select id={this.props.id}>
        {this.options}
      </select>
    </div>
  }

}


export default SelectComponent;
