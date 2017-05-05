import React, { Component } from 'react';

class Colors extends Component {
  constructor() {
    super()
    this.state = {newColor: 'rgb(255,255,255)'};
    this.generateColor = this.generateColor.bind(this);
  }

  generateColor() {
    let randomColor = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' +
        (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';

    this.setState({newColor: randomColor });
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
      marginBottom: 20
    }
    let containerStyle = {
      width: 600,
      height: 500,
      marginTop: 50,
      marginLeft: 'auto',
      marginRight: 'auto'
    }
    let colorStyle = {
      height: 200,
      width: 475,
      backgroundColor: this.state.newColor,
      border: '1px solid black',
      marginTop: 20,
      marginBottom: 20
    }
    return (
      <div style={containerStyle}>
        <div style={divStyle}>
          <label style={labelStyle} >Click the button and get a random color!</label>
          <button onClick={this.generateColor} style={buttonStyle} >Click me</button>
          <div style={colorStyle}>
          </div>
          <div style={labelStyle}>
            {this.state.newColor}
          </div>
        </div>
      </div>
    );
  }
}

export default Colors;
