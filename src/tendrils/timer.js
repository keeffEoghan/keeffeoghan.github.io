export class Timer {
    constructor(since, now) {
        this.time = 0;
        this.since = 0;

        this.offset = 0;

        this.rate = 1;
        this.step = 0;

        this.paused = false;

        this.reset(since, now);
    }

    now(now = Date.now()) {
        return (now-this.offset)*this.rate;
    }

    tick(now) {
        let time = this.time;
        let dt = 0;

        if(this.step > 0) {
            dt = this.step*this.rate;
            time += dt;
        }
        else {
            let last = time;

            time = this.now(now);
            dt = time-last;
        }

        if(this.paused) {
            this.offset += dt;
            dt = 0;
        }
        else {
            this.time = time;
        }

        return dt;
        // return Math.abs(dt);
    }

    reset(since = Date.now(), now = since) {
        this.since = this.offset = since;
        this.time = this.now(now);
    }
}

export default Timer;
