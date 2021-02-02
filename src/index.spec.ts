import { expect } from 'chai';

export function sum(a: number, b: number): String {
    return (a + b).toString();
}

describe('sample test-suite', () => {
    it('sum 1 + 3 should be 4', () => {
        expect(sum(1, 3)).eql("4");
    });
});
