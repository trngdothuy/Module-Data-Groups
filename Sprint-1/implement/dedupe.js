function dedupe(elements) {
    if (elements.length === 0) {
        return []
    }

    return elements.filter((element, index) => {
        return elements.indexOf(element) == index
    })
}

module.exports = dedupe;
