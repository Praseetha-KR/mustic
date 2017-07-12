afterEach(() => {
    jest.clearAllMocks();
    jest.resetModules();
});

const dummyRoot = document.createElement('div');
dummyRoot.className = 'dummy';

describe('Mustic module', () => {
    test('should throw error for non node inputs', () => {
        const mustic = require('../mustic');
        expect(() => mustic('dummy')).toThrowError(TypeError);
    });

    test('should create instances for Dom & Music classes', () => {
        const mustic = require('../mustic');
        const Dom = require('../mustic/Dom');
        const Music = require('../mustic/Music');

        const { dom, music } = mustic(dummyRoot);
        expect(dom instanceof Dom).toBeTruthy();
        expect(music instanceof Music).toBeTruthy();
    });

    test('should start listeners click & deviceorientation', () => {
        const mockListenBtnClick = jest.fn();
        const mockListenDeviceOrientation = jest.fn();

        jest.mock('../mustic/Dom', () =>
            jest.fn(() => {
                return {
                    listenBtnClick: mockListenBtnClick,
                    listenDeviceOrientation: mockListenDeviceOrientation
                };
            })
        );
        jest.mock('../mustic/Music', () => jest.fn());

        const mustic = require('../mustic');
        mustic(dummyRoot);

        expect(mockListenBtnClick).toHaveBeenCalled();
        expect(mockListenDeviceOrientation).toHaveBeenCalled();
    });
});
