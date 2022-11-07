import 'jest';
import { gcdRecursion } from './greatest-common-divisor';

describe('greatest-common-divisor', () => {
    describe('recursion', () => {
        it('should return gcd 13 for 39 26', async () => {
            expect(gcdRecursion(39, 26)).toBe(13);
        })

        it('should return gcd 5 for 25 15', async () => {
            expect(gcdRecursion(25, 15)).toBe(5);
        })

        it('should return gcd 14 for 42 56', async () => {
            expect(gcdRecursion(42, 56)).toBe(14);
        })

        it('should throw error if args not integer', async () => {
            expect(() => gcdRecursion(1.1, 2.4)).toThrow('Not a integer');
        })

        it('should throw error if args not integer', async () => {
            expect(() => gcdRecursion(-11, 0)).toThrow('Not greater than 0');
        })
    })
})