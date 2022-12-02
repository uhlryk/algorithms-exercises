export function fibonacciRecursion(n: number): number {
    if (n < 2) {
        return n;
    }
    return fibonacciRecursion(n - 2) + fibonacciRecursion(n - 1);
}

