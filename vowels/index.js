// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
    let c = 0;
    let check = "aeiou";

    for(let ch of str.toLowerCase()){
        if(check.includes(ch)){
            c++;
        }
    }
    return c;
}

module.exports = vowels;
