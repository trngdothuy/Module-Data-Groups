// Predict and explain first...

// This program attempts to log out all the property values in the object.
// But it isn't working. Explain why first and then fix the problem

const author = {
  firstName: "Zadie",
  lastName: "Smith",
  occupation: "writer",
  age: 40,
  alive: true,
};

for (const value in author) {
  console.log(author[value]);
}

// Prediction:
// I think value on line 15 will be undefined, it should be value.value 

// In fact:
// TypeError: author is not iterable

// It should be 
// console.log(author[value]);
