import { createCounter } from './counter';

describe('createCounter function', () => {
    it('returns the initial value in the first call, and increases by 1 in each call after that', () => {
        const counter = createCounter(10);
        expect(counter()).toBe(10);
        expect(counter()).toBe(11);
        expect(counter()).toBe(12);
    });
});
