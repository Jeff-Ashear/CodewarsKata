// doesn't work

function wontDisemvowel(str) {    
    for (let i = 0; i < str.length; i++) {
        if (str[i] === "a" || str[i] === "e" || str[i] === "i" || str[i] === "o" || str[i] === "u" || str[i] === "A" || str[i] === "E" || str[i] === "I" || str[i] === "O" || str[i] === "U")
        str = str.replace(str[i], "")
    }
    return str;
  }

function disemvowel(str) {    
    return str.replace(/[aeiou]/ig, '')
  }

  console.log(disemvowel("This website is for losers LOL!"))
  console.log(disemvowel("No offense but,\nYour writing is among the worst I've ever read"))
  console.log(disemvowel("What are you, a communist?"))
  
  console.log(wontDisemvowel("This website is for losers LOL!"))
  console.log(wontDisemvowel("No offense but,\nYour writing is among the worst I've ever read"))
  console.log(wontDisemvowel("What are you, a communist?"))