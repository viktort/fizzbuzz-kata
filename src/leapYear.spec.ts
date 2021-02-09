import { expect } from 'chai';

function leapCalculate(year: number) {
    return true;
}

describe("Leap Year Calculator", () => {
    it("returns true if its 1996", () => {
        expect(leapCalculate(1996)).eql(true);
    });
    it("returns false if its 2001", () => {
        expect(leapCalculate(2001)).eql(false);
    });
});
