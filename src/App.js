import React, { Component } from 'react';
import './App.css';
import './Components/Projects';
import Projects from './Components/Projects';

class App extends Component {
  constructor(){
    super();
    this.state = {
      projects:[
        {
        title:'Business Website',
        category:'Web Design'
        },
        {
        title:'Social App',
        category:'Mobile Development'
        },
        {
        title:'Ecommerce Shopping Carts',
        category:'Web Design'
        }
      ]
    }
  }
  render() {
    return (
      <div className="App">
        My App
        <Projects projects={this.state.projects} />
      </div>
    );
  }
}

export default App;
