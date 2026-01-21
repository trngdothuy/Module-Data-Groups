/*
  Count the number of times a word appears in a given string.

  Write a function called countWords that
    - takes a string as an argument
    - returns an object where
          - the keys are the words from the string and
          - the values are the number of times the word appears in the string

  Example
  If we call countWords like this:

  countWords("you and me and you") then the target output is { you: 2, and: 2, me: 1 }

  To complete this exercise you should understand
    - Strings and string manipulation
    - Loops
    - Comparison inside if statements
    - Setting values on an object

## Advanced challenges

1. Remove all of the punctuation (e.g. ".", ",", "!", "?") to tidy up the results

2. Ignore the case of the words to find more unique words. e.g. (A === a, Hello === hello)

3. Order the results to find out which word is the most common in the input
*/

function countWords(sentence) {
  if (typeof(sentence) != 'string') {
    throw new Error("Input must be a string")
  }

  if (sentence === "") {
    return {}
  }

  const sentenceArr = sentence.replace(/[.,\/#!?$%\^&\*;:{}=\-_`~()]/g,"").toLowerCase().split(" ")
  let wordsObj = {}

  for (const word of sentenceArr) {
    if (!wordsObj[word]) {
      wordsObj[word] = 1
    } else {
      wordsObj[word]++
    }
  }

  // change from obj => arr to sort
  const wordsArr = Object.entries(wordsObj).sort((a,b) => b[1] - a[1])

  // change back from arr => obj to return
  wordsObj = Object.fromEntries(wordsArr)

  return wordsObj
}

module.exports = countWords
