import React, {useState, useReducer} from 'react';


export const initialCardOne = {
    pokeImage:"",
    pokeName:"",
    pokemonHp:"",
    pokeAtt:"",
    pokeDef:"",
    pokeSpeed:"",
  };

export function reducer(state, action) {
    switch (action.type) {
      case "pokeImage":
        return {...state, pokeImage: action.payload};
        break;
        case "pokeName":
          return {...state, pokeName: action.payload};
          break;
          case "hp":
            return {...state, pokemonHp: action.payload};
            break;
            case "pokeAtt":
              return {...state, pokeAtt: action.payload};
              break;
              case "pokeDef":
                return {...state, pokeDef: action.payload};
                break;
                case "pokeSpeed":
                  return {...state, pokeSpeed: action.payload};
                  break;
                  default:
                    throw new Error();
                  }
                }

                //reducer function which will set a state for each pokemon card based on tha attributes of the fetch request from the API