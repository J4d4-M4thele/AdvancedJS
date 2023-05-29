/***************WORD SCRAMBLER**************
let word = 'supercalifragilisticexpialidocious';
function scramble(a) {
    //maxLoop states how many times the word will be scrambled
    let maxLoop = a.length;
    let tempString = '';
   for(let i=0; i < maxLoop; i++) {
      let index = Math.floor(Math.random() * a.length);
      tempString += a[index];
      console.log(tempString);
      a = a.substr(0, index) + a.substr(index + 1);
      console.log(a);
   }
   return tempString;
}  
console.log(scramble(word));
*/

/***************COUNTDOWN TIMER*************
let endDate = new Date(2025, 5, 15);
let currentDate = new Date();
console.log(endDate);
console.log(currentDate);
function countDown(endDate, currentDate) {
    let total = Date.parse(endDate) - Date.parse(currentDate);
    //dividing the parsed difference to get days, hours and minutes
    const days = Math.floor(total / (1000 * 60 * 60 * 24));
    const hrs = Math.floor((total / (1000 * 60 * 60)) % 24);
    const mins = Math.floor((total / 1000 / 60) % 60);
}
function update() {
    const tempDate = countDown();
    let output = '';
    for(let prop in tempDate) {
        output += (`${prop}: ${tempDate[prop]} `);
    }
    console.log(output);
    setTimeout(update, 1000);

}
update();*/