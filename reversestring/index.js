// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
let reversed = "";
for(let ch of str){
  
  reversed = ch + reversed;
}
return reversed;
}

module.exports = reverse;

// const arr = str.split('');
// arr.reverse();
// return arr.join('');


// let reversed = "";
// for(let ch of str){
  
//   reversed = ch + reversed;
// }
// return reversed;


// str.split('').reduce((rev, ch) => 
//  ch+rev
// ,'');