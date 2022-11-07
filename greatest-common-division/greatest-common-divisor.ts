export function gcdRecursion(a: number, b: number): number {
    if (!Number.isInteger(a) || !Number.isInteger(b)) {
        throw new Error ('Not a integer');
    }
    if(a < 1 || b < 1) {
        throw new Error('Not greater than 0');
    }

    [a, b] = a > b ? [a, b] : [b , a];

    a = a % b;

    if (!a) {
        return b;
    }
    return gcdRecursion(a, b);
}

export function gcdIteration(a: number, b: number): number {
    if (!Number.isInteger(a) || !Number.isInteger(b)) {
        throw new Error ('Not a integer');
    }
    if(a < 1 || b < 1) {
        throw new Error('Not greater than 0');
    }

    while(a > 0 && b > 0) {
        [a, b] = a > b ? [a, b] : [b , a];
        a = a % b;
    }

    return a || b;
}