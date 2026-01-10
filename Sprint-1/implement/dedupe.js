function dedupe(elements) {
    if (elements.length === 0) {
        return []
    }

    let newElements = []
    for (i = 0; i < elements.length; i++) {
        if (!newElements.includes(elements[i])) {
            newElements.push(elements[i])
        }
    }

    return newElements
}

module.exports = dedupe;