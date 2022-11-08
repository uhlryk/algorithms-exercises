export function factorialRecursion(num: number): number {
    if(!Number.isInteger(num)) {
        throw new Error('Not an integer')
    }
    if(num === 1 || num === 0) {
        return 1;
    }

    return num * factorialRecursion(num - 1);
}