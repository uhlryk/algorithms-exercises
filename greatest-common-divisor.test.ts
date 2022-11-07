import 'jest';
import {gcd} from './greatest-common-divisor';

describe('greatest-common-divisor', () => {
    it('should return gcd 13 for 39 26', async () => {
        const res = gcd(39, 26)
        expect(res).toBe(13);
    })

    it('should return gcd 5 for 25 15', async () => {
        const res = gcd(25, 15)
        expect(res).toBe(5);
    })
})