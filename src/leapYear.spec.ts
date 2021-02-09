import { expect } from 'chai';

describe("Leap Year Calculator", () => {
    it("returns true if its 1996", () => {
        expect(leapCalculate(1996)).toEql(true);
    });
});
