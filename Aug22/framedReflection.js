function mirror(text){
    let starsNum = 0;
    let eachWord = text.split(' ');
    let reflection = "";

    for (let i = 0; i < eachWord.length; i++) {
        if (eachWord[i].length > starsNum) {
            starsNum = eachWord[i].length
        }
        let thisWord = eachWord[i].split("").reverse().join("")
        let spaceNum = starsNum - thisWord.length
        let spaces = new Array(spaceNum + 1).join(" ")
        reflection = reflection + "* " + thisWord + spaces + " *\n"
    }
    
    let stars = new Array(starsNum + 5).join("*")

    return stars + '\n' + reflection + stars

}

console.log(mirror('Breakfast Munching Wombat Lady'), '*********\n* olleH *\n* dlroW *\n*********')