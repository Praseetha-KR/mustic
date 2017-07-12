const assert = require('assert');
const utils = require('../utils');

function _assertOrientation(alpha, beta, gamma) {
    assert.equal(typeof alpha, 'number');
    assert.equal(typeof beta, 'number');
    assert.equal(typeof gamma, 'number');

    assert(alpha >= 0 && alpha <= 360);
    assert(beta >= -180 && beta <= 180);
    assert(gamma >= -90 && gamma <= 90);
}

// Transforms device orientation to color values
function orientationToTheme(alpha, beta, gamma) {
    _assertOrientation(alpha, beta, gamma);

    const rgb = [
        utils.wholeNumber(alpha * 0.7083), // range diff ratio of rgb & alpha
        utils.wholeNumber(beta * 0.7083), // range diff ratio of rgb & beta
        utils.wholeNumber(gamma * 1.4167) // range diff ratio of rgb & gamma
    ];
    return {
        background: `rgb(${rgb.join(', ')})`,
        foreground: utils.percievedContrast(rgb)
    };
}

// Transforms device orientation to frequency value
function orientationToMusic(alpha, beta, gamma) {
    _assertOrientation(alpha, beta, gamma);

    return utils.wholeNumber((alpha + beta) * gamma);
}

module.exports = {
    orientationToTheme,
    orientationToMusic
};
