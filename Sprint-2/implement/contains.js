function contains(object, properties) {
    if (Object.keys(object).length === 0) {
        return false
    }
    for (const item in object) {
        if (item === properties) {
            return true
        } else return false
    }
}

module.exports = contains;

console.log(contains({a: 1, b: 2}, 'a'))