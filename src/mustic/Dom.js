const consts = require('./consts');
const { handleOrientation, handleClick } = require('./handlers');

class Dom {
    constructor(document) {
        this.component = document;
        this.component.innerHTML = `
            <div class="${consts.app.BASE}">
                <div class="${consts.app.BASE}__title">Mustic</div>
                <div class="${consts.app.DISPLAY}"></div>
                <input type="checkbox" id="playpause" class="${consts.app
                    .BUTTON_INPUT}">
                <label class="${consts.app
                    .BUTTON_LABEL}" for="playpause">${consts.app
            .LABEL_PLAY}</label>
            </div>
        `;

        const $ = this.component.querySelector.bind(this.component);

        this.container = $(`.${consts.app.BASE}`);
        this.display = $(`.${consts.app.DISPLAY}`);
        this.label = $(`.${consts.app.BUTTON_LABEL}`);
        this.input = $(`.${consts.app.BUTTON_INPUT}`);

        this.container.style.backgroundColor = consts.theme.BACKGROUND;
        this.container.style.color = consts.theme.FOREGROUND;
        this.display.innerHTML = '0 Hz';
    }

    get isChecked() {
        return this.input.checked;
    }

    set theme(theme) {
        this.container.style.backgroundColor = theme.background;
        this.container.style.color = theme.foreground;
    }

    set displayFrequency(freq) {
        this.display.innerHTML = `${freq} Hz`;
    }

    setPlayLabel() {
        this.label.innerHTML = `${consts.icon.PLAY} Play`;
    }

    setPauseLabel() {
        this.label.innerHTML = `${consts.icon.PAUSE} Pause`;
    }

    listenBtnClick(music) {
        this.input.addEventListener('click', handleClick.bind(this, music));
    }

    listenDeviceOrientation(music) {
        window.addEventListener(
            'deviceorientation',
            handleOrientation.bind(this, music)
        );
    }
}

module.exports = Dom;
