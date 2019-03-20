const flipAndInvertImage = require('./index');

describe('flipAndInvertImage', () => {
    it('', () => {
        expect(flipAndInvertImage([[1, 1, 0], [1, 0, 1], [0, 0, 0]])).toEqual(
            [[1, 0, 0], [0, 1, 0], [1, 1, 1]],
        );
        expect(flipAndInvertImage([[1, 1, 0, 0], [1, 0, 0, 1], [0, 1, 1, 1], [1, 0, 1, 0]]))
            .toEqual([[1, 1, 0, 0], [0, 1, 1, 0], [0, 0, 0, 1], [1, 0, 1, 0]]);
    });
});
