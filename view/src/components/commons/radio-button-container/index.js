import React, { Component } from 'react';

class RadioButtonContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };

    this.onChange = this.onChange.bind(this);
  }

  onChange(key, value) {
    this.setState({ key, value });
    this.props.onChange(key, value);
  }

  get radios() {
    return this.props.options.map((item, index) => {
      return <div className="form-check form-check-inline" key={index}>
        <input
          className="form-check-input"
          id={item.id}
          type="radio"
          value={item.value}
          checked={item.checked}
          name={this.props.attrKey}
          onChange={e => this.onChange(this.props.attrKey, item.value)}
        />

        <label
          className="form-check-label"
          htmlFor={this.props.id}>
            {item.label}
        </label>
      </div>
    });
  }

  render() {
    const component = <div className="form-group col">
      <p>{this.props.title}</p>
      <div className="form-check form-check-inline">
        {this.radios}
      </div>
    </div>

    return component;
  }
}

export default RadioButtonContainer;
