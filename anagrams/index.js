// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
  let cA = clear_me(stringA);
  let cB = clear_me(stringB);
  return cA === cB;
}

function clear_me(str){
    return str.replace(/[\^w]/g, '').toLowerCase().split('').sort().join('');
}

module.exports = anagrams;
// function anagrams(stringA, stringB) {
//     Amap = {};
//     Bmap = {};
//     if(stringA.length == stringB.length){
//         for(let ch of stringA.replace(/[^\w]/g, '').toLowerCase()){
//             Amap[ch] = Amap[ch] + 1 || 1;
//         }
        
//         for(let ch of stringB.replace(/[^\w]/g, '').toLowerCase()){
//             Bmap[ch] = Bmap[ch] + 1 || 1;
//         }

//         for(key in Amap){
//             if(Amap[key] !== Bmap[key]){
//                 return false;
//             }
//         }

//         return true;
//     }else{
//         return false;
//     }
// }