function findMax(elements) {
    if (elements.length === 0) {
        return -Infinity
    } else if (elements.length === 1) {
        return elements[0]
    } else {
        // elementsNew is elements without non-numeric values
        let elementsNew = []
        for (i = 0; i < elements.length; i++) {
            if (Number.isFinite(elements[i])) {
                elementsNew.push(elements[i])
            }
        }
        // 0 number values, return NaN
        if (elementsNew.length === 0) {
            return NaN
        }
        let result = elementsNew[0];
        for (i = 1; i < elementsNew.length; i++) {
            Number(elementsNew[i]) > Number(result) ? result = elementsNew[i] : result = result
        }
        return result
    }
}

module.exports = findMax;
