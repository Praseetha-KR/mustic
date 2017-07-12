describe('Dom class', () => {
    test('should provide methods', () => {
        const Dom = require('../Dom');
        const dom = new Dom(document.createElement('div'));

        expect(dom.isChecked).toBeDefined();

        dom.theme = { background: 'rgb(0, 0, 0)', foreground: 'white' };
        expect(dom.container.style.backgroundColor).toEqual('rgb(0, 0, 0)');
        expect(dom.container.style.color).toEqual('white');

        dom.displayFrequency = '1000';
        expect(dom.display.innerHTML).toEqual('1000 Hz');

        dom.setPlayLabel();
        expect(dom.label.innerHTML).toEqual('► Play');

        dom.setPauseLabel();
        expect(dom.label.innerHTML).toEqual('▌▌ Pause');
    });
});
