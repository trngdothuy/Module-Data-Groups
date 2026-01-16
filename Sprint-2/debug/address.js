// Predict and explain first...

// This code should log out the houseNumber from the address object
// but it isn't working...
// Fix anything that isn't working

const address = {
  houseNumber: "42",
  street: "Imaginary Road",
  city: "Manchester",
  country: "England",
  postcode: "XYZ 123",
};

console.log(`My house number is ${address["houseNumber"]}`);

// Prediction: 
// I think it should be ';' instead of ',' at the end of each line

// It was wrong. Actually we should put houseNumber in the ""

// It was not enough. In fact, because address is object, it the [] we cannot use the index but the name of the key like "houseNumber"