import React, { useState,useReducer } from 'react';
import PokeCall from './Fetch/index';
import PokemonCard from './displayCard/index';
import FetchButtonTwo from './fetchButtontwo';
import FightButton from './fight button/index'
import ResultsDisplay from './results'
import "./App.css";
import H1 from './heading/index';
import {initialCardOne, reducer} from './PokemonReducers/ReducerOne';
import {initialCardTwo, reducerTwo} from './PokemonReducers/ReducerTwo';
import {fight} from './Functions/Fight';
import {fetchPokemon, fetchPokemonTwo} from  './PokemonDataSetters/fetchFunction';




function App() {

//card one state and reducer
const [state, dispatch] = useReducer(reducer, initialCardOne);
//pokecard two and reducer
 const [stateTwo, dispatchTwo] = useReducer(reducerTwo, initialCardTwo);
              
//states on victory passed down to resultsDisplay hook
const[winner,setWinner]=useState("");
const[winCount,setWinCount]=useState(0);
const[winCountTwo,setWinCountTwo]=useState(0);



  return (
    <div className="App">

        <H1></H1>

        <div className='cards-section'>
        <PokemonCard 
        pokeName={state.pokeName} 
        pokeImage={state.pokeImage}
        pokeHp={state.pokemonHp}
        pokeAtt={state.pokeAtt}
        pokeDef={state.pokeDef}
        pokeSpeed={state.pokeSpeed}/> 

        <PokemonCard  pokeName={stateTwo.pokeName} pokeImage={stateTwo.pokeImage} pokeHp={stateTwo.pokemonHp}
        pokeAtt={stateTwo.pokeAtt} pokeDef={stateTwo.pokeDef} pokeSpeed={stateTwo.pokeSpeed}
        poke/>
        </div>


        <div className="button-section">
        <PokeCall fetchPokemon={()=>fetchPokemon({dispatch})}/>
        <FetchButtonTwo fetchPokemonTwo={()=>fetchPokemonTwo({dispatchTwo})}/>
      </div>  
     
        <FightButton fight={()=>{fight(state.pokeName,state.pokemonHp, state.pokeAtt, stateTwo.pokeName,stateTwo.pokemonHp, stateTwo.pokeAtt,setWinner,setWinCount,setWinCountTwo, winCount,winCountTwo)}} pokeName={state.pokeName} pokeHp={state.pokemonHp} pokeAtt={state.pokeAtt}
        pokeNameTwo={stateTwo.pokeName} pokeHpTwo={stateTwo.pokemonHp} pokeAttTwo={stateTwo.pokeAtt}/>
        <ResultsDisplay winnerDisplay={winner} winCountDisplay={winCount} winCountTwo={winCountTwo}/>
        <div id='battle-info'>battle info</div>


    </div>
  );
}

export default App;
