// Let's define how invert should work

// Given an object
// When invert is passed this object
// Then it should swap the keys and values in the object

// E.g. invert({x : 10, y : 20}), target output: {"10": "x", "20": "y"}

function invert(obj) {
  const invertedObj = {};

  if (typeof(obj) != 'object') {
    throw new Error("Input must be an object")
  }

  if (obj.length === 0) {
    return invertedObj
  }

  for (const [key, value] of Object.entries(obj)) {
    invertedObj[value] = key;
  }

  return invertedObj;
}

module.exports = invert;

// console.log(invert(""))

// a) What is the current return value when invert is called with { a : 1 }
// Answer: { key: 1 }

// b) What is the current return value when invert is called with { a: 1, b: 2 }
// Answer: { key: 2 }

// c) What is the target return value when invert is called with {a : 1, b: 2}
// Answer: {1: a, 2: b}

// c) What does Object.entries return? Why is it needed in this program?
// Answer: It returns an array from the object. IT helps manipulate the data easier.

// d) Explain why the current return value is different from the target output
// Answer: Because we use dot notation here. Instead of its value, the key will be inserted exactly as "key".

// e) Fix the implementation of invert (and write tests to prove it's fixed!)
// Answer: test in file invert.test.js