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
        console.log('started');
        this.osc.start();
    }
    stop() {
        console.log('stopped');
        this.osc.stop(0);
    }
}

module.exports = Oscillator;
