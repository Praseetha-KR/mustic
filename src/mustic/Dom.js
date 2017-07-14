const consts = require('./consts');
const { handleOrientation, handleClick } = require('./handlers');

class Dom {
    constructor(document) {
        this.domobj = {};
        this.domobj.component = document;
        this.domobj.component.innerHTML = `
                    <div class="${consts.app.BASE}">
                        <div class="${consts.app.BASE}__title">Mustic</div>
                        <div class="${consts.app.DISPLAY}"></div>
                        <input type="checkbox" id="playpause" class="${consts
                            .app.BUTTON_INPUT}">
                        <label class="${consts.app
                            .BUTTON_LABEL}" for="playpause">${consts.app
            .LABEL_PLAY}</label>
                    </div>
                `;
        const $ = this.domobj.component.querySelector.bind(
            this.domobj.component
        );
        this.domobj.container = $(`.${consts.app.BASE}`);
        this.domobj.display = $(`.${consts.app.DISPLAY}`);
        this.domobj.label = $(`.${consts.app.BUTTON_LABEL}`);
        this.domobj.input = $(`.${consts.app.BUTTON_INPUT}`);
        this.domobj.container.style.backgroundColor = consts.theme.BACKGROUND;
        this.domobj.container.style.color = consts.theme.FOREGROUND;
        this.domobj.display.innerHTML = '0 Hz';
    }

    get isChecked() {
        return this.domobj.input.checked;
    }

    setDisplayFrequency(freq) {
        this.domobj.display.innerHTML = `${freq} Hz`;
    }

    setTheme(theme) {
        this.domobj.container.style.backgroundColor = theme.background;
        this.domobj.container.style.color = theme.foreground;
    }

    setBtnLabel(type) {
        this.domobj.label.innerHTML =
            type === 'play'
                ? `${consts.icon.PLAY} Play`
                : `${consts.icon.PAUSE} Pause`;
    }

    listenBtnClick(music) {
        this.domobj.input.addEventListener(
            'click',
            handleClick.bind(this, music)
        );
    }

    listenDeviceOrientation(music) {
        window.addEventListener(
            'deviceorientation',
            handleOrientation.bind(this, music)
        );
    }
}

module.exports = Dom;
