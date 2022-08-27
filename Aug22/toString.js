function toStrings(data) {
   let string = "" + data
   if (data.constructor == Array) {
    return "[" + string + "]"
   } else {
       return string 
   }
}



console.log(toStrings(true))
console.log(toStrings(false))
console.log(toStrings(123))
console.log(toStrings(-456))
console.log(toStrings(3.14159))
console.log(toStrings([100, 50, 200]))
console.log(toStrings(Math.E))


