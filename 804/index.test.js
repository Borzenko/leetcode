const uniqueMorseRepresentations = require('./index');

describe('uniqueMorseRepresentations', () => {
    it('', () => {
        expect(uniqueMorseRepresentations(['gin', 'zen', 'gig', 'msg'])).toBe(2);
        expect(uniqueMorseRepresentations(['a'])).toBe(1);
        expect(uniqueMorseRepresentations([])).toBe(0);
        expect(uniqueMorseRepresentations(['rwjje', 'aittjje', 'auyyn', 'lqtktn', 'lmjwn'])).toBe(1);
        expect(uniqueMorseRepresentations(['yxmine', 'yxzd', 'eljys', 'uiaopi', 'pwlk'])).toBe(3);
    });
});
