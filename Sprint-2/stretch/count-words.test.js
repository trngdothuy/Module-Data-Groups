const countWords = require('./count-words')

test("given a string, return an object of words and the number it appears", () => {
    expect( countWords("you and me and you")).toEqual({ you: 2, and: 2, me: 1 })
})

test("given a string with punctuation, return an object of words and the number it appears without the punctuation", () => {
    expect( countWords("you, and me? and you")).toEqual({ you: 2, and: 2, me: 1 })
})

test("given a string with uppercase, return an object of words and the number it appears no matter lowercase or uppercase", () => {
    expect( countWords("you And mE and You")).toEqual({ you: 2, and: 2, me: 1 })
})

test("given a string, return an object of words in an order with the most common input", () => {
    expect( countWords("you And mE and You you")).toEqual({ you: 3, and: 2, me: 1 })
})

test("given an empty string, return an empty object", () => {
    expect(countWords("")).toEqual({})
})

test("given a string, return an error", () => {
    expect(() => countWords({})).toThrow("Input must be a string")
})