import 'jest';
import { fibonacciRecursion, memoizedFibonacciRecursion, fibonacciIteration } from './fibonacci';

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
    describe('recursion with memo', () => {
        it('should return 8 for 6', () =>{
            expect(memoizedFibonacciRecursion(6)).toBe(8);
        })
        it('should return 1 for 2', () =>{
            expect(memoizedFibonacciRecursion(2)).toBe(1);
        })
        it('should return 832040 for 30', () =>{
            expect(memoizedFibonacciRecursion(30)).toBe(832040);
        })
    })

    describe('iteration', () => {
        it('should return 8 for 6', () =>{
            expect(fibonacciIteration(6)).toBe(8);
        })
        it('should return 1 for 2', () =>{
            expect(fibonacciIteration(2)).toBe(1);
        })
        it('should return 832040 for 30', () =>{
            expect(fibonacciIteration(30)).toBe(832040);
        })
    })
})