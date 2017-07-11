/**
 * Converts a fraction to a whole number
 * @param {Number} fraction
 */
function wholeNumber(fraction) {
    return Math.abs(Math.floor(fraction));
}

/**
 * Calculates foreground color
 * based on percieved contrast for a given background
 * ref: https://www.w3.org/TR/AERT#color-contrast
 * @param {Array} rgb - rgb is an array of size 3 with value range is [0-255]
 */
function percievedContrast(rgb) {
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
