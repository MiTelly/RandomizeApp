import React, { Component } from 'react';

class Letters extends Component {
  constructor() {
    super()
    this.state = {newLetter: ""};
    this.generateLetter = this.generateLetter.bind(this);
  }

  generateLetter() {
    let letterArray = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N',
      'O','P','Q','R','S','T','U','V','W','X','Y','Z'];

    let randNum = Math.floor(Math.random() * 26);
    let randLet = letterArray[randNum];
    this.setState({newLetter: randLet });
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
          <label style={labelStyle} >Click the button and get a random letter between A and Z!</label>
          <button onClick={this.generateLetter} style={buttonStyle} >Click me</button>
          <h2 style={h2Style}>{this.state.newLetter}</h2>
        </div>
      </div>
    );
  }
}

export default Letters;
