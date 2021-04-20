import {handleAttck} from './HandleAttack';


export function fight(oneName,hpOne,attOne,twoName,hpTwo,attTwo,setWinner, setWinCount, setWinCountTwo, winCount,winCountTwo){

    let battleInfo= document.getElementById("battle-info");

    let winCountPlus=winCount;
    let winCountPlus2= winCountTwo;

  while(hpOne>0 && hpTwo>0){
      hpTwo=handleAttck(attOne, hpTwo,oneName,twoName);
     
      hpOne=handleAttck(attTwo,hpOne,twoName,oneName);    
    }
    if(hpOne<=0){
      winCountPlus2=winCountPlus2+1;
      console.log(`${oneName} fainted.`);
      console.log(`${twoName} won`);
      setWinner(twoName);
      setWinCountTwo(winCountPlus2)
      
    }else if(hpTwo<=0){
       winCountPlus=winCountPlus+1;
      console.log(`${twoName} fainted`);
      console.log(`${oneName} won`);
      setWinner(oneName);
      setWinCount(winCountPlus);
  }
};

//sets a battle and loops until one pokemon is at zero. currently only console logging put will parse this into p tags eventually with timeouts