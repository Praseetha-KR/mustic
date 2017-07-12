describe('Music class', () => {
    test('should provide methods', () => {
        const mockStart = jest.fn();
        const mockStop = jest.fn();

        jest.mock('../Oscillator', () =>
            jest.fn(() => {
                return {
                    start: mockStart,
                    stop: mockStop
                };
            })
        );

        const Music = require('../Music');
        const music = new Music();

        music.play();
        expect(mockStart).toHaveBeenCalled();

        music.pause();
        expect(mockStop).toHaveBeenCalled();

        music.frequency = 1000;
        expect(music.oscillator.frequency).toEqual(1000);
    });
});
