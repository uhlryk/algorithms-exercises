export function gcd(a: number, b: number): number {
    [a, b] = a > b ? [a, b] : [b , a];

    a = a % b;

    if (!a) {
        return b;
    }
    return gcd(a, b);
}