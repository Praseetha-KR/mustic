describe('Music class', () => {
    test('should provide methods', () => {
        const mockStart = jest.fn();
        const mockStop = jest.fn();

        global.AudioContext = jest.fn(() => {
            return {
                createOscillator: jest.fn(() => {
                    return {
                        type: '',
                        frequency: {},
                        connect: jest.fn(),
                        start: mockStart,
                        stop: mockStop
                    };
                })
            };
        });

        const Oscillator = require('../Oscillator');
        const instance = new Oscillator('sine');
        // instance.ctx = new AudioContext();

        instance.start();
        expect(mockStart).toHaveBeenCalled();

        instance.stop();
        expect(mockStop).toHaveBeenCalled();

        instance.frequency = 1000;
        expect(instance.osc.frequency.value).toEqual(1000);
    });
});
