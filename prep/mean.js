function sumValues(list) {
  let total = 0;
  for (i = 0; i < list.length; i++) {
    total += list[i]
  }
  return Number(total / list.length);
}

console.log(sumValues([3, 50, 7]));

module.exports = sumValues;