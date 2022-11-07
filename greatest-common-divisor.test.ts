import 'jest';
import {gcd} from './greatest-common-divisor';

describe('greatest-common-divisor', () => {
    it('should return 1', async () => {

        const res = gcd()
        expect(res).toBe(1);
    })
})