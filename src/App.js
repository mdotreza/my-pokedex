import React, { Component } from 'react';
import './App.css';
import Pokemon from './Pokemon';
import DetailPokemon from './DetailPokemon';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function Routefunc() {
  return (
      <Router>  
          <Switch>           
            <Route path="/" exact component={Home}/>
            {/* <Route path="/Mypokemon" component={Mypokemon}/> */}
            <Route path="/Pokemon" exact component={Pokemon}/>
            <Route path="/DetailPokemon" component={DetailPokemon}  />
          </Switch>
      </Router>
  );
}
const Home =()=>(
  <div>
    <h1>Pokedex</h1>
    <Pokemon/>
    
  </div>
)
class App extends Component {
  render(){
    return <div className="pokeapp">     
        <Routefunc/>
    </div>
  }
}

export default App;
