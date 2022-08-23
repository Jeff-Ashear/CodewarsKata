function mirror(text){
    let starsNum = 0;
    let eachWord = text.split(' ');
    let reflection = "";

    for (let i = 0; i < eachWord.length; i++) {
        if (eachWord[i].length > starsNum) {
            starsNum = eachWord[i].length
        }
    }
    
    for (let i = 0; i < eachWord.length; i++) {
        let thisWord = eachWord[i].split("").reverse().join("")
        let spaceNum = starsNum - thisWord.length
        let spaces = new Array(spaceNum + 1).join(" ")
        reflection = reflection + "* " + thisWord + spaces + " *\n"
    }
    
    let stars = new Array(starsNum + 5).join("*")

    return stars + '\n' + reflection + stars

}

console.log(mirror('Breakfast Munching Wombat Daddy'), '*********\n* olleH *\n* dlroW *\n*********')


// stole the following code from the solution by user arhigod to learn how the syntax works
function mirrorOfArhigod(s){
    let a = s.split(' ');
    let m = Math.max(...a.map(x=>x.length));
    a = a.map(x=>'* '+[...x].reverse().join('')+' '.repeat(m-x.length)+' *');
    return ['*'.repeat(m+4),...a,'*'.repeat(m+4)].join('\n');
  }