var Stack = /** @class */ (function () {
    function Stack() {
        this.elements = [];
    }
    Stack.prototype.push = function (item) {
        this.elements[this.elements.length] = item;
        this.print();
    };
    Stack.prototype.pop = function () {
        if (this.elements.length < 1) {
            throw "array is empty";
        }
        else {
            this.elements.length = this.elements.length - 1;
            console.log(this.elements.length);
        }
        this.print();
    };
    Stack.prototype.top = function () {
        var top = this.elements.length - 1;
        return this.elements[top];
    };
    Stack.prototype.print = function () {
        console.log(this.elements);
    };
    return Stack;
}());
var stack = new Stack();
stack.push(4);
stack.push(5);
stack.push(7);
stack.push(2);
stack.push(3);
stack.top();
stack.print();
stack.pop();
stack.push(6);
stack.push(10);
