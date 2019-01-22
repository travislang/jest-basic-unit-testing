const fizzbuzz = require('./fizzbuzz');

describe('Testing fizzbuzz reducer', () => {
    //If the number is divisible by 3, return "Fizz".
    test('number is devisible by 3, gives "fizz"', () => {
        expect(fizzbuzz(3)).toBe('fizz')
    })

    //If the number is divisible by 5, return "Buzz".
    test('number is devisible by 5, gives "buzz"', () => {
        expect(fizzbuzz(5)).toBe('buzz')
    })

    //If the number is divisible by both 3 and 5, return "FizzBuzz".
    test('number is devisible by 3 and 5, gives "fizzbuzz"', () => {
        expect(fizzbuzz(15)).toBe('fizzbuzz')
    })

    //Otherwise, just return the number that was passed into the function.

    test('number is not devisible by 3 or 5, gives the number', () => {
        expect(fizzbuzz(7)).toBe(7)
    })
});