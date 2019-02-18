const isPalindrome = require('./index');

describe('isPalindrome', () => {
    it('', () => {
        expect(isPalindrome(2)).toBe(true);
        expect(isPalindrome(356)).toBe(false);
        expect(isPalindrome(11211)).toBe(true);
        expect(isPalindrome(1221)).toBe(true);
        expect(isPalindrome(10)).toBe(false);
        expect(isPalindrome(-121)).toBe(false);
    });
});
