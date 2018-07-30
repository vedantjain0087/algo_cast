// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n) {

    for(i=1;i<=n;i++){
        stair = "";
        for(j=1;j<=n;j++){
            if(j<=i){
                stair += "#";
            }else{
                stair += " ";
            }
        }
        console.log(stair);
    }
}

module.exports = steps;
