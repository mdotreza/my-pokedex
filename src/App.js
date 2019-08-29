import React, { Component } from 'react';
import './App.css';
import Pokemon from './Pokemon';
import DetailPokemon from './DetailPokemon';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

class App extends Component {
  render(){
    return <div className="pokeapp">
      <h1>PokeDex!</h1>
      <Pokemon/>
    </div>;
  }
}

export default App;
