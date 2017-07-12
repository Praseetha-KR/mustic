afterEach(() => {
    jest.clearAllMocks();
    jest.resetModules();
});

describe('handlers module', () => {
    describe('handleOrientation function', () => {
        test('should update dom & music instances', () => {
            jest.mock('../transforms', () => {
                return {
                    orientationToTheme: jest.fn(() => {
                        return {
                            background: 'rgb(254, 127, 126)',
                            foreground: 'black'
                        };
                    }),
                    orientationToMusic: jest.fn(() => 10000)
                };
            });

            jest.mock('../Dom');
            jest.mock('../Music');

            const dom = new (require('../Dom'))(document);
            const music = new (require('../Music'))();
            const event = new Event('deviceorientation');

            const { handleOrientation } = require('../handlers');

            handleOrientation.call(dom, music, event);

            expect(music.frequency).toEqual(10000);
            expect(dom.displayFrequency).toEqual(10000);
            expect(dom.theme).toEqual({
                background: 'rgb(254, 127, 126)',
                foreground: 'black'
            });
        });
    });

    describe('handleClick function', () => {
        test('should play music on check', () => {
            jest.mock('../Dom');
            jest.mock('../Music');

            const mockdom = new (require('../Dom'))(document);
            const mockmusic = new (require('../Music'))();

            const music = Object.assign(mockmusic, {
                play: jest.fn(),
                pause: jest.fn()
            });
            const dom = Object.assign(mockdom, {
                isChecked: true,
                setPauseLabel: jest.fn(),
                setPlayLabel: jest.fn()
            });

            const { handleClick } = require('../handlers');

            handleClick.call(dom, music);

            expect(music.play).toHaveBeenCalled();
            expect(music.pause).not.toHaveBeenCalled();
            expect(dom.setPauseLabel).toHaveBeenCalled();
            expect(dom.setPlayLabel).not.toHaveBeenCalled();
        });

        test('should pause music on undo check', () => {
            jest.mock('../Dom');
            jest.mock('../Music');

            const mockdom = new (require('../Dom'))(document);
            const mockmusic = new (require('../Music'))();

            const music = Object.assign(mockmusic, {
                play: jest.fn(),
                pause: jest.fn()
            });
            const dom = Object.assign(mockdom, {
                isChecked: false,
                setPauseLabel: jest.fn(),
                setPlayLabel: jest.fn()
            });

            const { handleClick } = require('../handlers');

            handleClick.call(dom, music);

            expect(music.play).not.toHaveBeenCalled();
            expect(music.pause).toHaveBeenCalled();
            expect(dom.setPauseLabel).not.toHaveBeenCalled();
            expect(dom.setPlayLabel).toHaveBeenCalled();
        });
    });
});
