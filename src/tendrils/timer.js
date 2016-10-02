export class Timer {
    constructor(now) {
        this.time = 0;

        this.since = 0;
        this.rate = 1;
        this.fixed = 0;

        this.paused = false;
        this.delay = 0;

        this.reset(now);
    }

    now(now = Date.now()) {
        return (now-this.since)*this.rate;
    }

    tick(now) {
        let time = this.time;
        let dt = 0;

        if(this.fixed > 0) {
            dt = this.fixed*this.rate;
            time += dt;
        }
        else {
            let last = time;

            time = this.now(now);
            dt = time-last;
        }

        if(this.paused) {
            this.since += dt;
            dt = 0;
        }
        else {
            this.time = time;
        }

        return dt;
    }

    reset(now = Date.now()) {
        this.since = now;
        this.time = this.now(now);
    }
}

export default Timer;
