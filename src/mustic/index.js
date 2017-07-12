const assert = require('assert');
const Dom = require('./Dom');
const Music = require('./Music');

function init(root) {
    assert(root instanceof Element);

    const dom = new Dom(root);
    const music = new Music();

    dom.listenBtnClick(music);
    dom.listenDeviceOrientation(music);

    return { dom, music };
}

module.exports = init;
