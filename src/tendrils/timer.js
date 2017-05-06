export class Timer {
    constructor(now, since) {
        this.time = 0;
        this.since = 0;

        this.offset = 0;

        this.rate = 1;
        this.step = -1;

        this.dt = 0;

        this.paused = false;
        this.end = -1;
        this.loop = false;

        this.reset(now, since);
    }

    now(now = Date.now()) {
        return (now-this.offset)*this.rate;
    }

    tick(now) {
        let time = this.time;
        let dt = 0;

        if(this.step >= 0) {
            dt = this.step*this.rate;
            time += dt;
        }
        else {
            let past = time;

            time = this.now(now);
            dt = time-past;
        }

        if(this.paused) {
            this.offset += dt;
            dt = 0;
        }
        else if(this.end < 0) {
            this.time = time;
        }
        else if(this.loop) {
            this.time = time%this.end;
        }
        else {
            this.time = ((this.rate > 0)? Math.min : Math.max)(time, this.end);

            if(this.time !== time) {
                this.paused = true;
            }
        }

        this.dt = dt;

        return this;
    }

    seek(to) {
        this.offset = -to;

        return this;
    }

    scrub(by) {
        this.offset -= by;

        return this;
    }

    reset(now = Date.now(), since = now) {
        this.since = this.offset = since;
        this.time = this.now(now);

        return this;
    }
}

export default Timer;
