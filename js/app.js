function startGame(){

  for (var i =1; i <= 9; i++){
    clearBox(i);
  }

  document.turn = "X";
  if (Math.random() < 0.5){
    document.turn = "O";
  }
  document.winner = null;
  setMessage(document.turn + " gets to start.")
}

function setMessage(msg){
  document.getElementById('message').innerText = msg;
}

////////////////////////////////
function nextMove(box){
  if(document.winner != null){
    setMessage("Winner " + document.winner + " has already won");
   }
  else if(box.innerText == ""){
  box.innerText = document.turn;
  switchTurn();
  }
  else{
    setMessage("That Square is already in use")
  }
}

/////////////////////////////////////////
function switchTurn(){
  if(checkForWinner(document.turn)){
    setMessage("Congrats, " + document.turn);
    document.winner = document.turn;
  }
   else if(document.turn == "X"){
    document.turn = "O";
    setMessage("It's " + document.turn + "'s" + " turn")
  }
  else{
    document.turn = "X";
    setMessage("It's " + document.turn + "'s" + " turn")
  }
}
///////////////////////////////////////
function checkForWinner(move){
  var result = false;
   if(checkRow(1, 2, 3, move) ||
      checkRow(4, 5, 6, move) ||
      checkRow(7, 8, 9, move) ||
      checkRow(1, 4, 7, move) ||
      checkRow(2, 5, 8, move) ||
      checkRow(3, 6, 9, move) ||
      checkRow(1, 5, 9, move) ||
      checkRow(3, 5, 7, move))
      {
        result = "true";
      }
       return result;
    }

function checkRow(a, b, c, move){
  var result = false;
  if (getBox(a) == move && getBox(b) == move && getBox(c) == move) {
   result = true;
  }
     return result;
   }

function getBox(number){
  return document.getElementById("box" + number).innerText;
}

function clearBox(number) {
  document.getElementById("box" + number).innerText = "";
}



//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//
// var cellValue = function(key) {
//   switch(key) {
//     case '1': return null;
//     case '2': return null;
//     case '3': return null;
//     case '4': return null;
//     case '5': return null;
//     case '6': return null;
//     case '7': return null;
//     case '8': return null;
//     case '9': return null;
//     default : return null;
//   }
// }
// var getWinner = function(){
//    if (winnerIs('x')){
//      return "X is the Winner"
//    }
//    if (winnerIs('o')){
//      return "O is the Winner"
//    }
//    else{
//      return "Tie Game suckers"
//    }
// }
//
// function winnerIs = function(player){
//   return winsRow(player) || windColumn(player) || winsDiagnal(player)
//
// }
//
// function winsRow = function(player){
//   return allThree(player, cellValue('1'), cellValue('2'), cellValue('3'))
//   return allThree(player, cellValue('4'), cellValue('5'), cellValue('6'))
//   return allThree(player, cellValue('7'), cellValue('8'), cellValue('9'))
//
// }
// function winColumn = function(player){
//   return allThree(player ,cellValue('1'), cellValue('4'), cellValue('7'))
//   return allThree(player, cellValue('2'), cellValue('5'), cellValue('8'))
//   return allThree(player, cellValue('3'), cellValue('6'), cellValue('9'))
//
// }
// function winsDiagnal = function(player){
//   return allThree(player, cellValue('1'), cellValue('5'), cellValue('9'))
//   return allThree(player, cellValue('7'), cellValue('5'), cellValue('3'))
// }
//
// var allThree = function(player, cellOne, cellTwo, cellThree){
//   return (cellOne === player) && (cellTwo === player) && (cellThree === player);
// }
