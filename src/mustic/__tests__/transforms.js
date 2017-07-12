afterEach(() => {
    jest.clearAllMocks();
    jest.resetModules();
});

describe('Transforms', () => {
    describe('orientationToTheme function', () => {
        test('should handle invalid alpha, beta, gamma inputs', () => {
            const { orientationToTheme } = require('../transforms');

            expect(() => orientationToTheme(0, 0, 0)).not.toThrowError();
            expect(() => orientationToTheme(undefined, '0', 0)).toThrowError();
            expect(() => orientationToTheme(-1, 0, 0)).toThrowError();
            expect(() => orientationToTheme(0, 181, 0)).toThrowError();
            expect(() => orientationToTheme(0, 0, -91)).toThrowError();
        });

        test('should output correct theme object', () => {
            const { orientationToTheme } = require('../transforms');

            expect(orientationToTheme(359, 179, 89)).toMatchObject({
                background: 'rgb(254, 127, 126)',
                foreground: 'black'
            });
        });

        test('should output valid color values', () => {
            const { orientationToTheme } = require('../transforms');

            const theme = orientationToTheme(359, 179, 89);

            expect(theme.foreground).toMatch(/(white|black)/);
            expect(theme.background).toMatch(
                /rgb\((([01]?\d\d?|2[0-4]\d|25[0-5]),\s){2}([01]?\d\d?|2[0-4]\d|25[0-5])\)/
            );
        });
    });
    describe('orientationToMusic function', () => {
        test('should output correct frequency value', () => {
            const { orientationToMusic } = require('../transforms');

            expect(orientationToMusic(359, 179, 89)).toEqual(47882);
        });
    });
});
