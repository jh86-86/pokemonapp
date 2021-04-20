import {attributePointChanger} from './AttributePointChanger';


export function handleAttck(attack,health,nameOne,nameTwo){
    let newAttack= attributePointChanger(attack);
    health = health-newAttack;
    
     console.log(`${nameOne} attacked ${nameTwo} with ${newAttack} points of damage.`);
    console.log(`${nameTwo} has ${health} points of health left`);
    return health;
  }

  //handles the attack round and minuses from health, attribute change changes the attack damage every round