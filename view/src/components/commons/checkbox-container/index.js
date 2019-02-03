import React, { Component } from 'react';

class CheckboxContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };

    this.onChange = this.onChange.bind(this);
  }

  onChange(key, value) {
    this.setState({ key: value });
    this.props.onChange(key, value);
  }

  get checkboxes() {
    return this.props.checks.map((item, index) => {
      return <div className="custom-control custom-checkbox" key={index}>
        <input
          id={item.id}
          type="checkbox"
          className="form-check-input"
          onChange={ e => this.onChange(item.id, e.target.checked) }
        />
        <label htmlFor={item.id}>{item.label}</label>
      </div>
    });
  }

  render() {
    const component = <div className="form-group col">
      <p>{this.props.title}</p>
      <div className="form-group form-check-inline">
        { this.checkboxes }
      </div>
    </div>

    return component;
  }
}

export default CheckboxContainer;
