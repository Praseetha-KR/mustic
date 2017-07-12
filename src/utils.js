const assert = require('assert');

/**
 * Converts a fraction to a whole number
 * @param {Number} fraction
 */
function wholeNumber(fraction) {
    assert.equal(typeof fraction, 'number');

    return Math.abs(Math.round(fraction));
}

/**
 * Calculates foreground color
 * based on percieved contrast for a given background
 * ref: https://www.w3.org/TR/AERT#color-contrast
 * @param {Array} rgb - rgb is an array of size 3 with value range is [0-255]
 */
function percievedContrast(rgb) {
    assert(Array.isArray(rgb));
    assert.equal(rgb.length, 3);
    assert.equal(rgb.filter(v => typeof v !== 'number').length, 0);
    assert.equal(rgb.filter(v => v < 0 && v > 255).length, 0);

    const brightness = Math.round(
        (parseInt(rgb[0]) * 299 +
            parseInt(rgb[1]) * 587 +
            parseInt(rgb[2]) * 114) /
            1000
    );
    return brightness > 125 ? 'black' : 'white';
}

module.exports.wholeNumber = wholeNumber;
module.exports.percievedContrast = percievedContrast;
