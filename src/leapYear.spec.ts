import { expect } from 'chai';

function leapCalculate(year: number) {
    if ((year % 4)) return false;
    return true;
}

describe("Leap Year Calculator", () => {
    it("returns true if its 1996", () => {
        expect(leapCalculate(1996)).eql(true);
    });
    it("returns false if its 2001", () => {
        expect(leapCalculate(2001)).eql(false);
    });
    it("returns false for 2002", () => {
        expect(leapCalculate(2002)).eql(false);
    });
    it("returns false for 1900", () => {
        expect(leapCalculate(1900)).eql(false);
    });
});
