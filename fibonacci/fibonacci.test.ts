import 'jest';
import { fibonacciRecursion } from './fibonacci';

describe('fibonacci', () => {
    describe('recursion', () => {
        it('should return 8 for 6', () =>{
            expect(fibonacciRecursion(6)).toBe(8);
        })
        it('should return 13 for 7', () =>{
            expect(fibonacciRecursion(7)).toBe(13);
        })
        it('should return 1 for 2', () =>{
            expect(fibonacciRecursion(2)).toBe(1);
        })
        it('should return 55 for 10', () =>{
            expect(fibonacciRecursion(10)).toBe(55);
        })
    })
})