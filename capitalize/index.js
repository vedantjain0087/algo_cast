// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {

    let new_w = [];

    for(let ch of str.split(' ')){
        new_w.push(ch.slice(0,1).toUpperCase() + ch.slice(1));
    }

    return new_w.join(' ');
}

module.exports = capitalize;
