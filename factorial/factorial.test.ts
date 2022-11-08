import 'jest';

import { factorialRecursion, factorialIteration } from './factorial';

describe('factorial', () => {
    describe('recursion', () => {
        it('should return 6 for 3!', () => {
            expect(factorialRecursion(3)).toBe(6);
        });
        it('should return 24 for 4!', () => {
            expect(factorialRecursion(4)).toBe(24);
        })
        it('should return 120 for 5!', () => {
            expect(factorialRecursion(5)).toBe(120);
        })
        it('should return 1 for 1!', () => {
            expect(factorialRecursion(1)).toBe(1);
        })
        it('should throw error for non integer', () => {
            expect(() => factorialRecursion(0.1)).toThrow('Not an integer');
        })
    })
    describe('iteration', () => {
        it('should return 6 for 3!', () => {
            expect(factorialIteration(3)).toBe(6);
        });
        it('should return 24 for 4!', () => {
            expect(factorialIteration(4)).toBe(24);
        })
        it('should return 120 for 5!', () => {
            expect(factorialIteration(5)).toBe(120);
        })
        it('should return 1 for 1!', () => {
            expect(factorialIteration(1)).toBe(1);
        })
        it('should throw error for non integer', () => {
            expect(() => factorialIteration(0.1)).toThrow('Not an integer');
        })
    })
})