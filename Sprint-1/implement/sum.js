function sum(elements) {
    if (elements.length === 0) {
        return 0
    }

    let newElements = []

    for(i = 0; i < elements.length; i++) {
        if (Number.isFinite(elements[i])) {
            newElements.push(elements[i])
        }
    }

    if (newElements.length === 0) {
        return NaN
    }

    let sum = 0
    for (i = 0; i < newElements.length; i++) {
        sum += newElements[i]
    }
    return sum
}

module.exports = sum;
