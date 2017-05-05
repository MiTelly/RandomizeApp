import React, { Component } from 'react';
import './App.css';
import { Link } from 'react-router';

class App extends Component {
  render() {
    let linkStyle = {
      textDecoration: 'none',
      fontSize: 25,
      color: 'white'
      }
    let active = {
      color: 'white',
      backgroundColor: 'darkblue',
      padding: 16
      }

    return (
      <div className="App">
        <div className="Header">
          Randomize!
        </div>
        <nav className="Navbar">
          <ul>
            <li><Link to='Colors' style={linkStyle} activeStyle={active}>COLORS</Link></li>
            <li><Link to='Numbers' style={linkStyle} activeStyle={active}>NUMBERS</Link></li>
            <li><Link to='Letters' style={linkStyle} activeStyle={active}>LETTERS</Link></li>
          </ul>
        </nav>
        <div>
          {this.props.children}
        </div>

      </div>
    );
  }
}

export default App;
