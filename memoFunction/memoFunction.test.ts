import 'jest';
import { memoFunction } from './memoFunction';



describe('memoFunction', () => {
    it('should call function without arguments once', () => {
        const mockFunc = jest.fn(() => 'test');
        const memoMockFunc = memoFunction(mockFunc)
        memoMockFunc();
        memoMockFunc();
        memoMockFunc();

        expect(mockFunc.mock.calls.length).toBe(1);
    })

    it('should call function with one argument once per argument', () => {
        const mockFunc = jest.fn((a) => a);
        const memoMockFunc = memoFunction(mockFunc)
        memoMockFunc('a');
        memoMockFunc('b');
        memoMockFunc('a');
        memoMockFunc('b');
        memoMockFunc('a');
        memoMockFunc('b');
        expect(mockFunc.mock.calls.length).toBe(2);
    })

    it('should call function with two argument once per arguments pair', () => {
        const mockFunc = jest.fn((a) => a);
        const memoMockFunc = memoFunction(mockFunc)
        memoMockFunc('a', 'c');
        memoMockFunc('b', 'c');
        memoMockFunc('a', 'c');
        memoMockFunc('b', 'c');
        memoMockFunc('a', 'd');
        memoMockFunc('b', 'd');
        expect(mockFunc.mock.calls.length).toBe(4);
    })
})