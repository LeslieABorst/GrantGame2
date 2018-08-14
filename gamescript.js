"use stict"; {

  let userPoints = 40;
  let grantPoints = 10;
  let userWins = 0;


  function startGame(){
    const userAnswer = prompt("Do you want to play a game?");
    if (userAnswer === "yes") {
    const userName = prompt("What is your name?");
    startCombat(userName);
    }
    else {
      alert("goodbye");
    }
  }

  function startCombat(userName) {
    
    while (userWins < 3 && userPoints > 0) {
      let userContinue = prompt("Would you like to attack or quit?");
      
      if (userContinue === 'attack' && userWins < 3) {
        getDamage(userName);
      }
      if (userContinue === 'quit') {
        alert("goodbye");
        break;
      }

      if (grantPoints <= 0) {
      grantPoints = 10;
      userWins++;
      }
      if (userWins === 3) {
        console.log(`${userName} Wins!!`);
      }
      if (userPoints <= 0) {
        console.log("Grant Wins!");
      }
    }
  }

  function getDamage(userName) {
    userPoints -= Math.floor(Math.random() * 5) + 1;
    grantPoints -= Math.floor(Math.random() * 5) + 1;
    console.log(`${userName} has ${userPoints}.`);
    console.log(`Grant has ${grantPoints}.`);
  }
    
  startGame();
}  