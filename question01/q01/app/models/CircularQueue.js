class CircularQueue {
    constructor(size) {
        this.size = size;
        this.queue = [];
    }

    enqueue(item) {
        if (this.queue.length >= this.size) {
            this.queue.shift();
        }
        this.queue.push(item);
    }

    toArray() {
        return [...this.queue];
    }

    includes(item) {
        return this.queue.includes(item);
    }
}

module.exports = CircularQueue;
