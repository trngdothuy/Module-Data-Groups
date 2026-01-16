// Predict and explain first...

// This program should log out the title, how many it serves and the ingredients.
// Each ingredient should be logged on a new line
// How can you fix it?

const recipe = {
  title: "bruschetta",
  serves: 2,
  ingredients: ["olive oil", "tomatoes", "salt", "pepper"],
};

console.log(`${recipe.title} serves ${recipe.serves}
  ingredients:
${recipe.ingredients.join("\n")}`);

// Prediction: 
// I think on line 15 it should be ${recipe.ingredients.join("\n")}

// Because from 'recipe' we should find access ingredients and add "\n" between each item in the array, which is "\n"
