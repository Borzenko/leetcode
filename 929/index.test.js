const numUniqueEmails = require('./index');

describe('numUniqueEmails', () => {
    it('', () => {
        expect(numUniqueEmails(
            ['test.email+alex@leetcode.com',
                'test.e.mail+bob.cathy@leetcode.com',
                'testemail+david@lee.tcode.com',
            ],
        )).toEqual(2);
    });
});
