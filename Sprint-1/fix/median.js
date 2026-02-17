// Fix this implementation
// Start by running the tests for this function
// If you're in the Sprint-1 directory, you can run `npm test -- fix` to run the tests in the fix directory

// Hint: Please consider scenarios when 'list' doesn't have numbers (the function is expected to return null)
// or 'list' has mixed values (the function is expected to sort only numbers).

function calculateMedian(list) {
  let median = null;

  if (Array.isArray(list)) {
    // create an empty newList to store values and sort without modifying the original array
    let newList = []
    for (i = 0; i < list.length; i++) {
    if (Number.isInteger(list[i])) {
      newList.push(list[i])
    }}
    newList.sort((a, b) => a - b)

    // only pass when newList has values, else return null
    if (newList.length > 0) {
      const middleIndex = Math.floor(newList.length / 2);
      // if the length is odd, take the value of the middle numbers
      if (newList.length % 2 !=0) {
        median = newList.splice(middleIndex, 1)[0];
      } else {
        // if the length is even, take the avg of 2 middle numbers
        median = (newList[middleIndex] + newList[middleIndex - 1]) / 2;
    }
    }
  }  
  return median;
}

module.exports = calculateMedian;
