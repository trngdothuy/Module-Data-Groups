function tally(array) {
    if (!Array.isArray(array)) {
        throw new Error("Invalid input, input must be an array");
    }
    let result = {}
    if (array.length === 0) {
        return result
    }
    for (i = 0; i < array.length; i++) {
        if (result.hasOwnProperty(array[i])) {
            result[array[i]]++
        } else {
            result[array[i]] = 1
        }
    }
    return result
}

module.exports = tally;