var Queue = /** @class */ (function () {
    function Queue() {
        this.arraySize = 0;
        this.array = [];
    }
    Object.defineProperty(Queue.prototype, "queueSize", {
        get: function () {
            return this.arraySize;
        },
        set: function (length) {
            this.arraySize = length;
        },
        enumerable: false,
        configurable: true
    });
    Queue.prototype.enqueue = function (item) {
        if (this.array.length < this.arraySize) {
            return this.array.unshift(item);
        }
        else {
            console.log("size is full");
        }
    };
    Queue.prototype.dequeue = function () {
        if (this.array.length < 1) {
            throw "array is empty";
        }
        else {
            this.array.pop();
        }
    };
    Queue.prototype.isEmpty = function () {
        return this.array.length == 0;
    };
    Queue.prototype.peek = function () {
        var peek = this.array.length - 1;
        return peek;
    };
    Queue.prototype.isFull = function () {
        return (this.array.length === this.arraySize) ? true : false;
    };
    Queue.prototype.size = function () {
        return this.array.length;
    };
    Queue.prototype.print = function () {
        console.log(this.array);
    };
    return Queue;
}());
var queue = new Queue();
queue.queueSize = 5;
queue.enqueue(5);
queue.enqueue(1);
queue.enqueue(4);
queue.enqueue(4);
queue.enqueue(10);
queue.enqueue(4);
queue.print();
