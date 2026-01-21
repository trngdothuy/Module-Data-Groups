const invert = require("./invert.js");

test("given an object with single pair, return the inverted version of object", () => {
    expect(invert({ a : 1 })).toEqual({1 : 'a'})
});

test("given an object with multiple pairs, return the inverted version of object", () => {
    expect(invert({x : 10, y : 20})).toEqual({"10": "x", "20": "y"})
});

test("given an empty object, returns empty object", () => {
    expect(invert({})).toEqual({})
});

test("given an object with no value, returns inverted version", () => {
    expect(invert({a: ""})).toEqual({"": "a"})
});

test("given an object with no key, returns inverted version", () => {
    expect(invert({"": "a"})).toEqual({"a": ""})
});

test("given a string, returns errors", () => {
    expect(() => invert("")).toThrow("Input must be an object")
});

