const assert = require('assert');

// Converts a fraction to a whole number
function wholeNumber(fraction) {
    assert.equal(typeof fraction, 'number');

    return Math.abs(Math.round(fraction));
}

// Calculates foreground color based on percieved contrast for a given background
function percievedContrast(rgb) {
    assert(Array.isArray(rgb));
    assert.equal(rgb.length, 3);

    rgb.forEach(v => {
        assert.equal(typeof v, 'number');
        assert(v >= 0 && v <= 255);
    });

    // ref: https://www.w3.org/TR/AERT#color-contrast
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
