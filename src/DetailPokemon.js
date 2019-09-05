import React, {useState,useEffect,Component} from 'react';
import {Link} from 'react-router-dom';
import './App.css';


export function DetailPokemon({ match }) { 
      
    const[items,setItems] =useState({
        sprites:{}
    });
    const[itemsTwo,setItemsTwo] =useState([]);
    const[counter,setCount] =useState([]);
    const[itemsType,setItemsType] =useState([]);

    useEffect(() =>{
        fetchItem();
        console.log(match);
        console.log(counter);
    }, []);
    const fetchItem = async()=>{
        const fetchItem = await fetch(`https://pokeapi.co/api/v2/pokemon/${match.params.id}/`);

        const item = await fetchItem.json();
        setItems(item);
        setItemsTwo(item.abilities);
        setItemsType(item.types);
        console.log(item,item.abilities,item.types);
    }    
  return (
    
        <div key={items.name} className="pokemon--species">
        <h1>Pokemon Status</h1>
            <div className="pokemon--species--container">
            <Link to={"/"} className="backname"><i class="fa fa-arrow-left" aria-hidden="true"></i></Link>
                <div className="pokemon--species--pokename"><span>{items.name}</span></div>
                <div className="pokemon--species--sprite">
                <img src={process.env.PUBLIC_URL + `/image/${items.id}.png`} />
                </div>
                    <div className="pokemon--species--name"> <b>Base Exp</b><br/>{items.base_experience}</div>
                    <div className="pokemon--species--name"> <b>Weight</b> :{items.weight} | <b>Height</b> :{items.height} </div>
                    <div className="pokemon--species--name"><b>Type</b><br/>{itemsType.map(poketype=>(<span>{poketype.type.name} </span>))}</div>
                    <div className="pokemon--species--name"><b>Ability</b><br/>{itemsTwo.map(pokemon=>(<p>{pokemon.ability.name} </p>))}</div>    
            </div>
            <button onClick={() => setCount(1)}>
          Catch
           </button>
        </div>
        );
      }
export default DetailPokemon ;
