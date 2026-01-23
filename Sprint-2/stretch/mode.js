// You are given an implementation of calculateMode

// calculateMode's implementation can be broken down into two stages:

// Stage 1. One part of the code tracks the frequency of each value
// Stage 2. The other part finds the value with the highest frequency

// refactor calculateMode by splitting up the code
// into smaller functions using the stages above

function calculateMode(list) {
  // track frequency of each value
  let freqs = new Map();

  for (let num of list) {
    if (typeof num !== "number") {
      continue;
    }
    if (freqs.get(num)) {
      freqs.set(num, freqs.get(num) + 1)
    } else {
      freqs.set(num, 1);
    }
    // freqs.set(num, (freqs.get(num) || 0) + 1);
  }
  
  if (freqs.size === 0) {
    return NaN
  }
      
  // Find the value with the highest frequency
  // let maxFreq = 0;
  // let mode;
  // for (let [num, freq] of freqs) {
  //   if (freq > maxFreq) {
  //     mode = num;
  //     maxFreq = freq;
  //   }
  // }
  const sortFreg = new Map([...freqs.entries()].sort((a, b) => b[1] - a[1]))
  // change sortFreg from Map to Array => choose the 1st pair => choose the 1 element (num)
  return [...sortFreg.entries()][0][0]

  // console.log(freqs.sort((a, b) => a[freg] - b[freg]))

  // return maxFreq === 0 ? NaN : mode;
}

module.exports = calculateMode;
