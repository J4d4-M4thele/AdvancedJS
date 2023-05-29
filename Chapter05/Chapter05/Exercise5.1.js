let maxNumber = 5;
let randomNumber = Math.floor(Math.random() * 5 + 1);
console.log(randomNumber);
let correctAnswer = false;
while (!correctAnswer) {
  let response = Number(prompt('Enter a number between 1 and 5.'));
  if (response===randomNumber) {
      alert('You are correct!');
      correctAnswer = true;
      //when correct answer is true it automatically breaks out of the loop so no need for a break.
  }
  else if (response > randomNumber) {
      alert('Incorrect, too high');
  } else {
      alert('Incorrect, too low');
  }
}