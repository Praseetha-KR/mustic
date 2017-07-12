const Dom = require('./Dom');
const Music = require('./Music');

function init(root) {
    try {
        const dom = new Dom(root);
        const music = new Music();

        dom.listenBtnClick(music);
        dom.listenDeviceOrientation(music);

        return { dom, music };
    } catch (e) {
        throw e;
    }
}

module.exports = init;
