import React, { Component } from 'react';
import './App.css';
import Planes from './Planes';
import PlanesInfo from './PlanesInfo';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      noOfPlanes:0
    }
  }
  render() {
    return (
      <div className="App">
        <Planes noOfPlanes={this.state.noOfPlanes}/>
        <PlanesInfo/>
      </div>
    );
  }
}

export default App;
