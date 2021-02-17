import React, { useState } from 'react';
import PokeCall from './Fetch/index';
import PokemonCard from './displayCard/index';
import fetchPokemonTwo from './displayCard/index';
import FetchButtonTwo from './fetchButtontwo';
import FightButton from './fight button/index'
import ResultsDisplay from './results'
import "./App.css";
import H1 from './heading/index';



function App() {

const[pokeName,setPokeName]=useState("");
const[pokeNameTwo,setPokeNameTwo]=useState("");
const[pokeImage,setImage]=useState("");



const[pokeHp,setPokeHp]=useState("");
const[pokeAtt,setpokeAtt]=useState("");
const[pokeDef,setPokeDef]=useState("");
const[pokeSpeed,setPokeSpeed]=useState("")

const[pokeImageTwo,setImageTwo]=useState("");
const[pokeHpTwo,setPokeHpTwo]=useState("")
const[pokeAttTwo,setpokeAttTwo]=useState("");
const[pokeDefTwo,setPokeDefTwo]=useState("");
const[pokeSpeedTwo,setPokeSpeedTwo]=useState("")

const[winner,setWinner]=useState("");
const[winCount,setWinCount]=useState(0);
const[winCountTwo,setWinCountTwo]=useState(0);

// console.log(pokeName,pokeHp,pokeAtt,pokeDef,pokeSpeed);
// console.log(pokeNameTwo,pokeHpTwo, pokeAttTwo,pokeDefTwo,pokeSpeedTwo);
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
    const url=process.env.REACT_APP_POKEMON_API;
    const response =await fetch(url);
    const data =await response.json();
    // console.log(data);
   let name= data.name;
   let image=data.sprites.front_default;
   let hp= data.stats[0].base_stat;
   let attack= data.stats[1].base_stat;
   let defense= data.stats[2].base_stat;
  //  let hp= data.stats[3].base_stat;
  //  let hp= data.stats[4].base_stat;
    let speed= data.stats[5].base_stat;
   //console.log(hp,attack,defense,speed);

  //  console.log(name);
  //  console.log(image)
   setPokeHp(hp);
  setImage(image);
  setPokeName(name);
  setpokeAtt(attack);
  setPokeDef(defense);
  setPokeSpeed(speed);
}

async function fetchPokemonTwo(){
  let rand= randomInt();
  const url=`https://pokeapi.co/api/v2/pokemon/${rand}`;
  const response =await fetch(url);
  const data =await response.json();
   console.log(data);
 let nameTwo= data.name;
 let imageTwo=data.sprites.front_default;
   let hpTwo= data.stats[0].base_stat;
   let attackTwo= data.stats[1].base_stat;
   let defenseTwo= data.stats[2].base_stat;
  //  let hp= data.stats[3].base_stat;
  //  let hp= data.stats[4].base_stat;
    let speed= data.stats[5].base_stat;
setPokeHpTwo(hpTwo);
setPokeNameTwo(nameTwo);
setImageTwo(imageTwo);
setpokeAttTwo(attackTwo);
setPokeDefTwo(defenseTwo);
setPokeSpeedTwo(speed);
}

function handleAttck(attack,health,nameOne,nameTwo){
  //console.log(`${nameTwo}'s health ${health}`)
  let newAttack= attributePointChanger(attack);
  health = health-newAttack;
   console.log(`${nameOne} attacked ${nameTwo} with ${newAttack} points of damage.`);
  console.log(`${nameTwo} has ${health} points of health left`);
  return health;
 
}

// function handleDefense(baseDefense,attackAtt){
//   let newDefense= attributePointChanger(baseDefense);
//   let  newDefense;
// }



function fight(oneName,hpOne,attOne,twoName,hpTwo,attTwo){
    //let defenseOne= defOne defTwo
    //let winnerDisplay= document.querySelector(".winner");

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


  return (
    <div className="App">

        <H1 heading={heading}></H1>

        <div className='cards-section'>
        <PokemonCard 
        pokeName={pokeName} 
        pokeImage={pokeImage}
        pokeHp={pokeHp}
        pokeAtt={pokeAtt}
        pokeDef={pokeDef}
        pokeSpeed={pokeSpeed}/> 
        <PokemonCard  pokeName={pokeNameTwo} pokeImage={pokeImageTwo} pokeHp={pokeHpTwo}
        pokeAtt={pokeAttTwo} pokeDef={pokeDefTwo} pokeSpeed={pokeSpeedTwo}
        poke/>
        </div>

        <div className="button-section">
        <PokeCall fetchPokemon={fetchPokemon}/>
        <FetchButtonTwo fetchPokemonTwo={fetchPokemonTwo}/>
      </div>  

     
        <FightButton fight={fight} pokeName={pokeName} pokeHp={pokeHp} pokeAtt={pokeAtt}
        pokeNameTwo={pokeNameTwo} pokeHpTwo={pokeHpTwo} pokeAttTwo={pokeAttTwo}/>
        <ResultsDisplay winnerDisplay={winner} winCountDisplay={winCount} winCountTwo={winCountTwo}/>


    </div>
  );
}

export default App;
