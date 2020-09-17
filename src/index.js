import React from 'react';
import ReactDOM from 'react-dom';

class InputField extends React.Component {
  constructor(props) {
    super(props);
    this.setState = {
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    this.props.changeFunction(e.target.value)
  }
  render() {
    const unit = this.props.unit;
    return (
      <fieldset>
        <legend>{unit}</legend>
        <input value={this.props.val} onChange={this.handleChange}></input>
      </fieldset>
    )
  }
}

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

      unit: 'm',
      value: 1
    };
    this.handleMetreChange = this.handleMetreChange.bind(this);
    this.handleFeetChange = this.handleFeetChange.bind(this);
  }
  metresToFeet(metres) {
    return metres * 3.281;
  }
  feetToMetres(feet) {
    return feet / 3.281;
  }
  handleMetreChange(value) {
    this.setState({
      unit: 'm',
      value: value
    })
  }
  handleFeetChange(value) {
    this.setState({
      unit: 'f',
      value: value
    })
  }
  render() {
    const { unit, value } = this.state

    const metres = unit === 'm' ? value : this.feetToMetres(value);
    const feet = unit === 'f' ? value : this.metresToFeet(value);
    return (
      <div>
        <InputField val={metres} unit="Metres" changeFunction={this.handleMetreChange} />
        <InputField val={feet} unit="Feet" changeFunction={this.handleFeetChange} />
      </div>
    )
  }
}
ReactDOM.render(<Calculator />, document.getElementById('root'));


