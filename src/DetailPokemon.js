import React, {useState,useEffect,Component} from 'react';
import Pokemon from "./Pokemon";

class DetailPokemon extends Component{
render(){
    return <div className="detail">
        <Pokemon name="bulbasaur"/>
    </div>
    }
}
export default DetailPokemon;
