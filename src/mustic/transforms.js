const utils = require('../utils');

/**
 * Transforms device orientation to color values
 * @param {Number} alpha - range [0 - 360]
 * @param {Number} beta - range [-180 - 180]
 * @param {Number} gamma - range [-90 - 90]
 */
function orientationToTheme(alpha, beta, gamma) {
    const rgb = [
        utils.wholeNumber(alpha * 0.7083), // range diff ratio of rgb & alpha
        utils.wholeNumber(beta * 0.7083), // range diff ratio of rgb & beta
        utils.wholeNumber(gamma * 1.4167) // range diff ratio of rgb & gamma
    ];
    return {
        background: `rgb(${rgb.join(',')})`,
        foreground: utils.percievedContrast(rgb)
    };
}

/**
 * Transforms device orientation to frequency value
 * @param {Number} alpha - range [0 - 360]
 * @param {Number} beta - range [-180 - 180]
 * @param {Number} gamma - range [-90 - 90]
 */
function orientationToMusic(alpha, beta, gamma) {
    return utils.wholeNumber((alpha + beta) * gamma);
}

module.exports = {
    orientationToTheme,
    orientationToMusic
};
