const totalAmount = require("./till.js")

test("Given an object of coins, return the total amount in pounds", () => {
    expect(totalAmount).toEqual("£4.4")
})