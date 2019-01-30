const twoSum = require('./index');

describe('twoSum', () => {
    it('', () => {
        expect(twoSum([3, 2, 3], 6)).toEqual([0, 2]);
        expect(twoSum([2, 3, 8, 7, 11, 15], 9)).toEqual([0, 3]);
    });
});
