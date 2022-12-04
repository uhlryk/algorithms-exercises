export function fibonacciRecursion(n: number): number {
    if (n < 2) {
        return n;
    }
    return fibonacciRecursion(n - 2) + fibonacciRecursion(n - 1);
}

export function memoizedFibonacciRecursion(n: number, memo: { [n: number]: number } = {}) : number {
    if (n < 2) {
        return n;
    }

    memo[n] = (memo[n -1] || memoizedFibonacciRecursion(n - 1, memo)) + (memo[n -2] || memoizedFibonacciRecursion(n - 2, memo));

    return memo[n];
}

export function fibonacciIteration(n: number): number {
    if (n < 2) {
        return n;
    }

    let prevPrev = 0;
    let prev = 1;
    for (let i = 2; i <= n; i ++) {
        [prevPrev, prev] = [prev, prev + prevPrev];
    }

    return prev;
}