function createLookup(countryCurrencyPairs) {
  let result = {}
  for (i = 0; i < countryCurrencyPairs.length; i++) {
    result[countryCurrencyPairs[i][0]] = countryCurrencyPairs[i][1]
  }
  return result
}

module.exports = createLookup;
