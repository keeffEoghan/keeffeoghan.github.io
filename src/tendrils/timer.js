export class Timer {
    constructor(start = Date.now()) {
        this.start = this.time = start;
        this.dt = 0;
        this.rate = 0;
    }

    now(time = Date.now()) {
        return time-this.start;
    }

    tick() {
        const t0 = this.time;

        this.time = this.now();

        return this.dt = (this.rate || this.time-t0);
    }

    restart(start) {
        this.constructor(start);
    }
}

export default Timer;
