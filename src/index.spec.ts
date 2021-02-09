import { expect } from 'chai';

function fizzbuzz(a: number): string {

    if (!(a % 5)) {
        return "Buzz";
    }

    if (!(a % 3)) {
        return "Fizz";
    }

    return a.toString();
}

describe("Test fizzbuzz", () => {
    const ourNumbers = {
        1: "1",
        2: "2",
        4: "4",
        3: "Fizz",
        6: "Fizz",
        9: "Fizz",
        12: "Fizz",
        5: "Buzz",
        10: "Buzz",
        15: "Buzz"
    };
    for (const num in ourNumbers) {
        it("input number to return expected response", () => {
            expect(fizzbuzz(parseInt(num))).eql(ourNumbers[num]);
        });
    }
});
