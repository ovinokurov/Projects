import React, { Component } from 'react';
import './App.css';
import './Components/Projects';
import Projects from './Components/Projects';

class App extends Component {
  render() {
    return (
      <div className="App">
        My App
        <Projects />
      </div>
    );
  }
}

export default App;
