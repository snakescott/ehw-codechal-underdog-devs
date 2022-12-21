<?php

/*
MENTOR Greg: HOMEWORK 2022-12-19

Write a function that takes a string `substring` as an argument and returns
an array of all of the words that contain that substring (the substring
can appear anywhere in the word).

ALGORITHM ONLY

Eric Hepperle
2022-12-19

V1
*/

/*
ALGORITHM

// FUNCTION: main($memStart, $cssStyles)

SLURP scrabble file into array (scrabbleArray)

DEFINE matchedWords array
DEFINE needle to search for as string (substring) = TH
DEFINE small words array to test with = AA, THE


// FUNCTION: getWordsContainingSubstring(needle)
DEFINE matchedWords array

LOOP over each word in scrabbleArray

  SET temp var currentWord

  SANITIZE word and needle (wordIsValid(word, needle))
  
  IF sanitizedWord is valid
  AND substring is found in currentWord (foundIn(sanitizedWord, needle))

    ADD currentWord to matchedWords

  END valid word check

END

## RETURN array of words containing substring
RETURN matchedWords


// FUNCTION: foundIn(word, needle)
LOOP over each char in currentWord

  SET temp var wordChar = currentWord[i]

  IF wordChar same as first letter of needle then start testing

    IF substring is found in current word
    ADD currentWord to matchedWords array

  END

END

RETURN


// FUNCTION wordIsValid(word, needle)
TRIM whitespace from start and end of word

IF word is shorter than needle (ALSO accounts for is word is whitespace only)
  return FALSE
END

RETURN TRUE


// FUNCTION: substringOf($word, $needle)
LOOP over each char in word as wordChar

  LOOP over each char of needle as needleChar

    IF wordChar NOT same as needleChar

      RETURN false

    END

    // OTHERWISE check if next char matches next char, etc

  END needle loop

  ## We only get here is all chars in needle were found so
  RETURN true

END word char loop


*/



$currentWord = trim($currentWord);

    if (strlen($currentWord) < strlen($needle)) {
      continue;
    }

    if (startsWith($currentWord, $needle) && endsWith($currentWord, $needle)) {
      array_push($matches, $currentWord);
    }