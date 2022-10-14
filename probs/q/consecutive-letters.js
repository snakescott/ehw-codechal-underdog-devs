/* 

Filename: consecutive-letters.js

Programmer: Eric Hepperle
Assignment: Wordplay: What are all of the letters that never appear consecutively in an English word?
Date Completed: 10/14/22

Details: For example, we know that “U” isn’t an answer, because of the word VACUUM, and we know that
“A” isn’t an answer, because of “AARDVARK”, but which letters never appear consecutively?

Demonstrates: Consecutive letters

Q

*/

const fs = require('fs')

let matches = []
let reg = /GHTLY/
let filename = '../sowpods.txt'
let filtered = []
let needle = 'TYPE'

const abc = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

// Read file into an array of words

const buffer = fs.readFileSync(filename)
const fileStr = buffer.toString()
const words = fileStr.split('\n') // make array

const sampleArr = [
  "BORROW OR ROB?", "BRANCH", "CYST", "DAMMIT, I'M MAD!",
  "DEIFIED", "DIPLOMATIC", "DO GEESE SEE GOD?", "HAIRCUT",
  "HYMN", "LEVEL", "MOSQUITO", "MURDRUM",
  "NON", "POP", "POWER", "SPY", "THY"
]


/* ALGORITHM:

Initialize results / matches array

Define alphabet / character set

    Foreach word in words array,

      Foreach char/letter in alphabet,

        if char appears consecutively

          return

      Add word to results array

    Display sorted array

*/

function getAllWordsWithNoConsecutiveChars(arr) {

  let out = []
  out.lettersNonConsec = []
  out.sortedWordsNoConsec = []
  out.groupedByLetter = []

  // reg = /^(?=.*[A-Z]+).*/g
  // reg = /BRA/g
  reg = /([A-Z])\1/

  matches = arr.filter(word => !word.match(reg))
  sorted = matches.sort()

  console.log(`\nTOTAL WORDS IN ${filename}: ${arr.length}`)
  console.log(`TOTAL WORDS IN MATCHES ARRAY: ${matches.length}\n`)

  // obj.lettersNonConsec = sorted.filter()
  // Join word as string then process
  // arr


  // Foreach letter in alphabet create object in out array
  abc.split('').forEach(ltr => {
    let obj = {}
    obj.letter = ltr

    // dynamic regex
    let dynReg = RegExp(`^${ltr}`)

    // find all words starting with current ltr
    obj.results = sorted.filter(word => word.match(dynReg))

    out.groupedByLetter.push(obj)


  })

  out.sortedWordsNoConsec = sorted

  return out

}

let noConsec = getAllWordsWithNoConsecutiveChars(sampleArr)

console.log(`\n**** E X T R A  C R E D I T ****\n`)
console.log(`Here are all the words with NO CONSECUTIVE letters:`)
console.table(noConsec.groupedByLetter)

console.log('END')
