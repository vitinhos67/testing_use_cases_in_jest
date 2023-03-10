import exp from 'constants'
import {sum } from '../../src/common/sum'
describe("Test function sum", () => {

afterEach(() => jest.clearAllMocks());

it("Sum Two numbers to be 2", () => {
    const sumTwoNumbers = sum(1,1)
    expect(sumTwoNumbers).toBe(2)
} )

it("should have an console.log property in function sum", () => {

const consoleSpy = jest.spyOn(console, "log")
sum(1,1)

expect(consoleSpy).not.toHaveBeenCalledTimes(1)

})



})