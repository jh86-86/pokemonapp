import react from 'react';



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



export default fight;