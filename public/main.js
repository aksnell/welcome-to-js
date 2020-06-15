const numberOfCupsOfCoffee = 0
const fullName = 'Alexander Snell'

console.log(numberOfCupsOfCoffee, fullName)

const userName = window.prompt('What is your name?')

console.log(`Hello ${userName}!`)

const firstOperand = parseFloat(window.prompt('Give me a number!'))
const secondOperand = parseFloat(window.prompt('Give me a second number!'))

const sum = firstOperand + secondOperand
const difference = firstOperand - secondOperand
const product = firstOperand * secondOperand
const quotient = firstOperand / secondOperand
const remainder = firstOperand % secondOperand

console.log(`If you sum ${firstOperand} and ${secondOperand} you get ${sum}`)
console.log(`If you subtract ${firstOperand} from ${secondOperand} you get ${difference}`)
console.log(`If you multiple ${firstOperand} and ${secondOperand} you get ${product}`)
console.log(`If you divide ${firstOperand} and ${secondOperand} you get ${quotient}`)
console.log(`If you modulo ${firstOperand} and ${secondOperand} you get ${remainder}`)

const randomNumbers = `81 37 70 43 56 88 23 52 10 79 52 51 50 96 66 36 85 8 31 74 22 33 26 52 4 77 71 78 23 49 23 83 48 84 94 75 62 60 15 25 46 3 99 55 39 60 34 47 20 53 53 1 91 86 53 10 62 39 72 58 91 59 78 9 58 3 10 72 42 72 49 54 40 17 50 68 20 43 3 42 25 38 51 98 60 16 81 60 56 97 34 29 45 67 99 63 34 56 17 10`.split(' ').map(x => parseInt(x))

// The way you asked
let smallest = randomNumbers[0]

for (num of randomNumbers) {
  if (num < smallest) {
    smallest = num
  }
}

const smallestOfArray = Math.min(...randomNumbers)
const largestOfArray = Math.max(...randomNumbers)
const sumOfArray = randomNumbers.reduce((x, y) => x + y)
const avgOfArray = sumOfArray / randomNumbers.length
const sumOfOdd = randomNumbers.filter(x => x % 2 != 0).reduce((accumulator, num) => accumulator + num)
const sumOfOddTernary = randomNumbers.reduce((accumulator, num) => num % 2 != 0 ? accumulator + num : accumulator + 0)
const countOfEven = randomNumbers.filter(x => x % 2 === 0).length

console.log(smallest, smallestOfArray, largestOfArray, sumOfArray, avgOfArray, sumOfOdd, sumOfOddTernary, countOfEven)

