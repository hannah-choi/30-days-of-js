import { createHelloWorld } from './create-hello-world';

describe('createHelloWorld function', () => {
    it('returns "Hello World"', () => {
        //const result = createHelloWorld();
        expect(createHelloWorld()()).toBe('Hello World');
    });
});
