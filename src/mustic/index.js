const Dom = require('./Dom');
const Music = require('./Music');

function init(root) {
    const dom = new Dom(root);
    const music = new Music();

    dom.listenBtnClick(music);
    dom.listenDeviceOrientation(music);
}

module.exports = init;
