const functions = {
    random: (min, max) => {
        return Math.floor(Math.random() * max) + min;
    },
    delay: (t, fn) => {
        let queue = [],
            self,
            timer;

        function schedule(t, fn) {
            timer = setTimeout(function() {
                timer = null;
                fn();
                if (queue.length) {
                    const item = queue.shift();
                    schedule(item.t, item.fn);
                }
            }, t);
        }
        self = {
            delay: function(t, fn) {
                // if already queuing things or running a timer,
                //   then just add to the queue
                if (queue.length || timer) {
                    queue.push({ t: t, fn: fn });
                } else {
                    // no queue or timer yet, so schedule the timer
                    schedule(t, fn);
                }
                return self;
            },
            cancel: function() {
                clearTimeout(timer);
                queue = [];
                return self;
            },
        };
        return self.delay(t, fn);
    },
};

export default functions;
