afterEach(() => {
    jest.clearAllMocks();
    jest.resetModules();
});

describe('Utils', () => {
    test('wholeNumber function should convert fractions correctly', () => {
        const { wholeNumber } = require('../utils');

        expect(wholeNumber(123456.789)).toEqual(123457);
        expect(wholeNumber(100.4)).toEqual(100);
        expect(wholeNumber(0)).toEqual(0);
        expect(wholeNumber(-45.23)).toEqual(45);
    });

    test('wholeNumber function should handle invalid input', () => {
        const { wholeNumber } = require('../utils');

        expect(() => wholeNumber('12.34')).toThrowError();
        expect(() => wholeNumber(undefined)).toThrowError();
        expect(() => wholeNumber({})).toThrowError();
        expect(() => wholeNumber(null)).toThrowError();
    });

    test('percievedContrast function should output color correctly', () => {
        const { percievedContrast } = require('../utils');

        expect(percievedContrast([125, 125, 125])).toEqual('white');
        expect(percievedContrast([126, 126, 126])).toEqual('black');
    });

    test('percievedContrast function should handle invalid rgb input', () => {
        const { percievedContrast } = require('../utils');

        expect(() => percievedContrast(1)).toThrowError();
        expect(() => percievedContrast(undefined)).toThrowError();
        expect(() => percievedContrast([123])).toThrowError();
        expect(() => percievedContrast([0, 0, 0, 0])).toThrowError();
        expect(() => percievedContrast([0, 0, 'a'])).toThrowError();
        // expect(() => percievedContrast([0, 0, 0])).not.toThrowError();
    });
});
