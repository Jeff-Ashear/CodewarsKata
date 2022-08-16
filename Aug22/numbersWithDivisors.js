function procArrInt(listNum) {
    let totalNums = listNum.length
    let totalPrimes = 0
    let highestDivs = 1
    let highestArr = []
    
    const primeChecker = num => {
        for (let i = 2, s = Math.sqrt(num); i <= s; i++) {
            if (num % i === 0) return false;
        }
        return num >= 2
    }
    
    function numOfDivisors(n) {

        var numDivisors = 1
        var factor = 2

        while (factor * factor <= n) {
            if (n % factor === 0) {
                var exponent = 0
                do {
                    n /= factor;
                    exponent++
                } while (n % factor === 0)
                numDivisors *= exponent + 1
            }
            factor = factor == 2 ? 3 : factor + 2
        }
        if (n > 1) {
            numDivisors *= 2
        }
        return numDivisors
    }

    for (let i = 0; i < listNum.length; i++) {
        if (numOfDivisors(listNum[i]) === 2) {
            totalPrimes++
        } else {
            let currentDivs = numOfDivisors(listNum[i])
            if (currentDivs === highestDivs) {
                highestArr.push(listNum[i])
            } else if (currentDivs > highestDivs) {
                highestArr = []
                highestDivs = currentDivs
                highestArr.push(listNum[i])
            }
        }    
    }

    // highestArr.sort(function (a, b) {
    //     return a - b
    // })
    return [totalNums, totalPrimes, [highestDivs, highestArr.sort((a, b) => a - b) ] ]
}



arr2 = [267, 273, 271, 145, 275, 150, 487, 169, 428, 50, 314, 444, 445,
    67, 458, 211, 58, 95, 357, 486, 359, 491, 108, 493, 247, 379]

console.log(procArrInt(arr2))