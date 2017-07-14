const transforms = require('./transforms');

function handleOrientation(music, event) {
    const alpha = event.alpha || 0;
    const beta = event.beta || 0;
    const gamma = event.gamma || 0;

    const theme = transforms.orientationToTheme(alpha, beta, gamma);
    const freq = transforms.orientationToMusic(alpha, beta, gamma);

    this.setTheme(theme);
    this.setDisplayFrequency(freq);
    music.frequency = freq;
}

function handleClick(music) {
    if (this.isChecked) {
        music.play();
        this.setBtnLabel('play');
    } else {
        music.pause();
        this.setBtnLabel('pause');
    }
}

module.exports.handleOrientation = handleOrientation;
module.exports.handleClick = handleClick;
