function parseQueryString(queryString) {
  const queryParams = {};
  if (queryString.length === 0) {
    return queryParams;
  }

  console.log(queryString.indexOf("=") != queryString.lastIndexOf("="))

  if (queryString.indexOf("=") != queryString.lastIndexOf("=") && queryString.lastIndexOf("=") > queryString.indexOf("&")) {
    const keyValuePairs = queryString.split("&");

    for (const pair of keyValuePairs) {
      const index = pair.indexOf('=')
      const key = pair.slice(0, index)
      const value = pair.slice(index+1, pair.length)
      queryParams[key] = value;
  }
  } else {
    const index = queryString.indexOf('=')
    const key = queryString.slice(0, index)
    const value = queryString.slice(index+1, queryString.length)
    queryParams[key] = value;
  }
  return queryParams;
}

module.exports = parseQueryString;

console.log(parseQueryString("equation=x=z&y"))