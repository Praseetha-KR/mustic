class Oscillator {
    constructor(type) {
        this.ctx = new AudioContext();
        this.osc = this.ctx.createOscillator();
        this.osc.type = type;
        this.osc.connect(this.ctx.destination);
    }
    set frequency(freq) {
        this.osc.frequency.value = freq;
    }
    start() {
        this.osc.start();
    }
    stop() {
        this.osc.stop(0);
    }
}

module.exports = Oscillator;
