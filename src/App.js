import React, { useState,useReducer } from 'react';
import PokeCall from './Fetch/index';
import PokemonCard from './displayCard/index';
import fetchPokemonTwo from './displayCard/index';
import FetchButtonTwo from './fetchButtontwo';
import FightButton from './fight button/index'
import ResultsDisplay from './results'
import "./App.css";
import H1 from './heading/index';





function App() {


//pokecard one
const initialCardOne = {
  pokeImage:"",
  pokeName:"",
  pokemonHp:"",
  pokeAtt:"",
  pokeDef:"",
  pokeSpeed:"",
};

function reducer(state, action) {
  switch (action.type) {
    case "pokeImage":
      console.log(action.payload);
      return {...state, pokeImage: action.payload};
      break;
      case "pokeName":
        console.log(action.payload);
        return {...state, pokeName: action.payload};
        break;
        case "hp":
          console.log(action.payload);
          return {...state, pokemonHp: action.payload};
          break;
          case "pokeAtt":
            console.log(action.payload);
            return {...state, pokeAtt: action.payload};
            break;
            case "pokeDef":
              console.log(action.payload);
              return {...state, pokeDef: action.payload};
              break;
              case "pokeSpeed":
                console.log(action.payload);
                return {...state, pokeSpeed: action.payload};
                break;
                default:
                  throw new Error();
                }
              }
              
              
              const [state, dispatch] = useReducer(reducer, initialCardOne);



//pokecard two

const initialCardTwo = {
  pokeImage:"",
  pokeName:"",
  pokemonHp:"",
  pokeAtt:"",
  pokeDef:"",
  pokeSpeed:"",
};

function reducerTwo(stateTwo, action) {
  switch (action.type) {
    case "pokeImage":
      console.log(action.payload+"card two");
      return {...stateTwo, pokeImage: action.payload};
      break;
      case "pokeName":
        console.log(action.payload);
        return {...stateTwo, pokeName: action.payload};
        break;
        case "hp":
          console.log(action.payload);
          return {...stateTwo, pokemonHp: action.payload};
          break;
          case "pokeAtt":
            console.log(action.payload);
            return {...stateTwo, pokeAtt: action.payload};
            break;
            case "pokeDef":
              console.log(action.payload);
              return {...stateTwo, pokeDef: action.payload};
              break;
              case "pokeSpeed":
                console.log(action.payload);
                return {...stateTwo, pokeSpeed: action.payload};
                break;
                default:
                  throw new Error();
                }
              }
              
              
              const [stateTwo, dispatchTwo] = useReducer(reducerTwo, initialCardTwo);
              
              
 
              
const[winner,setWinner]=useState("");
const[winCount,setWinCount]=useState(0);
const[winCountTwo,setWinCountTwo]=useState(0);

let resultsArray= [0,0]
const[resultTable,setResultTable]=useState(resultsArray);

function randomInt(){
  let rand= Math.ceil(Math.random()*151);
  return rand;
  }

  function attributePointChanger(att){
    let rand= Math.floor(Math.random()*att);
    return rand;
    }
 
  
    async function fetchPokemon(){
      let rand= randomInt();
      const url=`${process.env.REACT_APP_POKEMON_API}${rand}`; 
      const response =await fetch(url);
      const data =await response.json();
    let name= data.name;
    let image=data.sprites.front_default;
    let hp= data.stats[0].base_stat;
    let attack= data.stats[1].base_stat;
    let defense= data.stats[2].base_stat;
    let speed= data.stats[5].base_stat;
      dispatch({type: "hp", payload:hp});
      dispatch({type:"pokeImage", payload: image});
      dispatch({type: "pokeName", payload:name});
      dispatch({type:"pokeAtt", payload:attack})
      dispatch({type: "pokeDef", payload:defense});
      dispatch({type:"pokeSpeed", payload:speed});
  }


  //pokemon card Two
async function fetchPokemonTwo(){
  let rand= randomInt();
  const url=`https://pokeapi.co/api/v2/pokemon/${rand}`;
  const response =await fetch(url);
  const data =await response.json();
 let nameTwo= data.name;
 let imageTwo=data.sprites.front_default;
   let hpTwo= data.stats[0].base_stat;
   let attackTwo= data.stats[1].base_stat;
   let defenseTwo= data.stats[2].base_stat;
    let speedTwo= data.stats[5].base_stat;
    dispatchTwo({type: "hp", payload:hpTwo});
      dispatchTwo({type:"pokeImage", payload: imageTwo});
      dispatchTwo({type: "pokeName", payload:nameTwo});
      dispatchTwo({type:"pokeAtt", payload:attackTwo})
      dispatchTwo({type: "pokeDef", payload:defenseTwo});
      dispatchTwo({type:"pokeSpeed", payload:speedTwo});
}

function handleAttck(attack,health,nameOne,nameTwo){
  let newAttack= attributePointChanger(attack);
  health = health-newAttack;
   console.log(`${nameOne} attacked ${nameTwo} with ${newAttack} points of damage.`);
  console.log(`${nameTwo} has ${health} points of health left`);
  return health;
 
}




function fight(oneName,hpOne,attOne,twoName,hpTwo,attTwo){

    let winCountPlus=winCount +1;
    let winCountPlus2= winCountTwo +1;

  while(hpOne>0 && hpTwo>0){
      hpTwo=handleAttck(attOne, hpTwo,oneName,twoName);
     
      hpOne=handleAttck(attTwo,hpOne,twoName,oneName);    
      if(hpOne<=0){
        
        console.log(`${oneName} fainted.`);
        console.log(`${twoName} won`);
        setWinner(twoName);
        setWinCountTwo(winCountPlus2)
        
      }else if(hpTwo<=0){
         winCountPlus=winCountPlus++;
        console.log(`${twoName} fainted`);
        console.log(`${oneName} won`);
        setWinner(oneName);
        setWinCount(winCountPlus);
      }
  }
};

let heading="Pokemon";


console.log(state.pokeAtt)
  return (
    <div className="App">

        <H1 heading={heading}></H1>

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
        <PokeCall fetchPokemon={fetchPokemon}/>
        <FetchButtonTwo fetchPokemonTwo={fetchPokemonTwo}/>
      </div>  

     
        <FightButton fight={fight} pokeName={state.pokeName} pokeHp={state.pokemonHp} pokeAtt={state.pokeAtt}
        pokeNameTwo={stateTwo.pokeName} pokeHpTwo={stateTwo.pokemonHp} pokeAttTwo={stateTwo.pokeAtt}/>
        <ResultsDisplay winnerDisplay={winner} winCountDisplay={winCount} winCountTwo={winCountTwo}/>


    </div>
  );
}

export default App;
