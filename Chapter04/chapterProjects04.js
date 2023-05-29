/***********************************FRIEND CHECKER GAME*******************************/
let user = prompt('Are you Jada\'s friend? If so, what is your name?');
switch (user) {
    case 'Kyria':
    case 'Mpilo':
    case 'Shekinah':
    case 'Nchadi':
    case 'Naledi':
      console.log('Hi there friend!');
      break;         
    default:
        console.log('I don\'t know who you are!');
      break;        
}

/***************************ROCK, PAPER, SCISSORS**********************************
let game = ['Rock', 'Paper', 'Scissors'];
let randomNum = Math.floor(Math.random()* 3 /*multiply by n+1);
console.log(game[randomNum]);
let response = prompt('Rock, Paper or Scissors?');
//TIED GAME
if (game[randomNum]===response) {
    //responses are the same
    alert('It\'s a tie!');
}
//ROCK VS. PAPER
else if (game[randomNum] === 'Rock' && response === 'Paper') {
    //user wins
    alert('Paper beats Rock! You win!');
}else if (game[randomNum] === 'Paper' && response === 'Rock') {
    //user loses
    alert('Paper beats Rock! You lose!');
}
//ROCK VS. SCISSORS
else if (game[randomNum] === 'Rock' && response === 'Scissors'){
    //user loses
    alert('Rock beats Scissors! You lose!');
}else if (game[randomNum] === 'Scissors' && response === 'Rock'){
    //user wins
    alert('Rock beats Scissors! You win!');
}
//SCISSORS VS. PAPER
else if (game[randomNum] === 'Paper' && response === 'Scissors') {
    //user wins
    alert('Scissors beats Paper! You win!');
}else if (game[randomNum] === 'Scissors' && response === 'Paper') {
    //user loses
    alert('Scissors beats Paper! You lose!');
}
*/