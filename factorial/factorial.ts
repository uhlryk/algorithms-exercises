export function factorialRecursion(num: number): number {
    if(!Number.isInteger(num)) {
        throw new Error('Not an integer')
    }
    if(num === 1 || num === 0) {
        return 1;
    }

    return num * factorialRecursion(num - 1);
}

export function factorialTailCallRecursion(num: number, prevVal: number = 1): number {
    if(!Number.isInteger(num)) {
        throw new Error('Not an integer')
    }
    const val = num * prevVal;
    if(num === 1 || num === 0) {
        return val;
    }
    
    return factorialTailCallRecursion(num - 1, val);
}

export function factorialIteration(num: number) :number {
    if(!Number.isInteger(num)) {
        throw new Error('Not an integer')
    }
    if(num === 1 || num === 0) {
        return 1;
    }
    let res = 1;
    for(let i = 1; i <= num; i++) {
        res=i*res;
    }
    return res;
}