import React, {useReducer, useState} from 'react';



export const initialCardTwo = {
    pokeImage:"",
    pokeName:"",
    pokemonHp:"",
    pokeAtt:"",
    pokeDef:"",
    pokeSpeed:"",
  };
  
  export  function reducerTwo(stateTwo, action) {
    switch (action.type) {
      case "pokeImage":
        return {...stateTwo, pokeImage: action.payload};
        break;
        case "pokeName":
          return {...stateTwo, pokeName: action.payload};
          break;
          case "hp":
            return {...stateTwo, pokemonHp: action.payload};
            break;
            case "pokeAtt": 
              return {...stateTwo, pokeAtt: action.payload};
              break;
              case "pokeDef":
                return {...stateTwo, pokeDef: action.payload};
                break;
                case "pokeSpeed":      
                  return {...stateTwo, pokeSpeed: action.payload};
                  break;
                  default:
                    throw new Error();
                  }
                }

    //sets the state of the second card and populates the card with data from the fetch request             