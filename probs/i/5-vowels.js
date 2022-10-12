/* 

Filename: 5-vowels.js

Programmer: Eric Hepperle
Assignment: Wordplay: What are all of the words that have all 5 vowels, in any order?
Date Completed: 10/12/22

Demonstrates: Words containing all 5 vowels any order

*/

const fs = require('fs')

let matches = []
let reg = /UU/
let filename = '../sowpods.txt'

// Read file into an array of words

const buffer = fs.readFileSync(filename)
const fileStr = buffer.toString()
const words = fileStr.split('\n') // make array

console.log('\nSOLUTION:\n')
// let regex = /[^AEIOU]/ -- negated char class NOT WORKING
const filtered = words.filter(
  word =>
    word.match(/^(?=.*A)(?=.*E)(?=.*I)(?=.*O)(?=.*U).*/)
)

console.log(filtered)
console.log(`Total matches: ${filtered.length}`)