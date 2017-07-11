const Oscillator = require('./Oscillator');

class Music {
    constructor() {
        this.oscillator = {};
    }
    play() {
        this.oscillator = new Oscillator('sine');
        this.oscillator.start();
    }
    pause() {
        this.oscillator.stop();
    }
    set frequency(freq) {
        this.oscillator.frequency = freq;
    }
}

module.exports = Music;
