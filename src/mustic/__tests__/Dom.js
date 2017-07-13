describe('Dom class', () => {
    test('should provide methods', () => {
        const Dom = require('../Dom');
        const instance = new Dom(document.createElement('div'));

        expect(instance.isChecked).toBeDefined();

        instance.setTheme({ background: 'rgb(0, 0, 0)', foreground: 'white' });
        expect(instance.domobj.container.style.backgroundColor).toEqual(
            'rgb(0, 0, 0)'
        );
        expect(instance.domobj.container.style.color).toEqual('white');

        instance.setDisplayFrequency('1000');
        expect(instance.domobj.display.innerHTML).toEqual('1000 Hz');

        instance.setPlayLabel();
        expect(instance.domobj.label.innerHTML).toEqual('► Play');

        instance.setPauseLabel();
        expect(instance.domobj.label.innerHTML).toEqual('▌▌ Pause');
    });
});
