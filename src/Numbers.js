import React, { Component } from 'react';

class Numbers extends Component {
  constructor() {
    super()
    this.state = {newNumber: null};
    this.generateNumber = this.generateNumber.bind(this);
  }

  generateNumber() {
    let randNum = Math.floor(Math.random() * 10001);
    this.setState({newNumber: randNum });
  }

  render() {
    let divStyle = {
      display: 'flex',
      flexDirection: 'column',
    }
    let buttonStyle = {
      width: 100,
      fontSize: 20,
      borderRadius: 5
    }
    let labelStyle = {
      fontSize: 20,
      marginBottom: 20,
    }
    let containerStyle = {
      width: 600,
      height: 500,
      marginTop: 50,
      marginLeft: 'auto',
      marginRight: 'auto'
    }
    let h2Style = {
      height: 28,
      width: 100,
      textAlign: 'center',
      border: '1px solid black'
    }
    return (
      <div style={containerStyle}>
        <div style={divStyle}>
          <label style={labelStyle} >Click the button and get a random number between 0 and 10 000!</label>
          <button onClick={this.generateNumber} style={buttonStyle} >Click me</button>
          <h2 style={h2Style}>{this.state.newNumber}</h2>
        </div>
      </div>
    );
  }
}

export default Numbers;
