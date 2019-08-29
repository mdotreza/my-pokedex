import React, { useState,useEffect, Component } from 'react';
import {Link} from 'react-router-dom';
import './App.css';

class PokemonCard extends Component{
  render(){
    const {pokemon,id} = this.props;
    return <div className="pokemon--species">
            <div className="pokemon--species--container">
              <div className="pokemon--species--sprite">
                <img src={process.env.PUBLIC_URL + `/image/${id}.png`} />
              </div>
              <Link to={`/DetailPokemon/${id}`}>
                  <div className="pokemon--species--name"> {pokemon.name} </div>
              </Link>
            </div>
          </div>;
    }
}
class Pokemon extends Component{
    constructor(props){
      super(props);
      this.state = {
        species : [],
        fetched : false,
        loading : false,
      };
    }
    componentWillMount(){
      this.setState({
        loading : true
      });
      
      fetch('http://pokeapi.co/api/v2/pokemon?limit=151').then(res=>res.json())
      .then(response=>{
        this.setState({
          species : response.results,
          loading : true,
          fetched : true
        });
        console.log(response);
      });
    }
    
    render(){
      const {fetched, loading, species} = this.state;
      let content ;
      if(fetched){
        content = <div className="pokemon--species--list">{species.map((pokemon,index)=><PokemonCard key={pokemon.name} id={index+1} pokemon={pokemon}/>)}</div>;
      }else if(loading && !fetched){
          content = <p> Loading ...</p>;
      }
      else{
        content = <div/>;
      }
      return  <div>
        {content}
      </div>;
    }
  }
export default Pokemon;