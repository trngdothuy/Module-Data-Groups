function sum(elements) {
    if (elements.length === 0) {
        return 0
    }

    let newElements = []
    newElements = elements.filter((element) => Number.isFinite(element))
     
    return newElements.length === 0 ? NaN : newElements.reduce(
        (accumulator, currentValue) => accumulator + currentValue,
        0
    )
}

module.exports = sum;
