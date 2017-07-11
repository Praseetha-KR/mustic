const transforms = require('./transforms');

function handleOrientation(music, event) {
    const alpha = event.alpha;
    const beta = event.beta;
    const gamma = event.gamma;

    const theme = transforms.orientationToTheme(alpha, beta, gamma);
    const freq = transforms.orientationToMusic(alpha, beta, gamma);

    this.theme = theme;
    this.displayFrequency = freq;
    music.frequency = freq;
}

function handleClick(music) {
    if (this.isPlaying) {
        music.play();
        this.setPauseLabel();
    } else {
        music.pause();
        this.setPlayLabel();
    }
}

module.exports.handleOrientation = handleOrientation;
module.exports.handleClick = handleClick;
