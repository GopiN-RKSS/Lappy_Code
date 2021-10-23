interface IStack {
  push(item:number):void,
  pop():void,
  top():void,
  print():void,
}

class Stack implements IStack{
  private elements: number[];
  constructor() {
    this.elements = [];
  }
  push(item:number):void {
    this.elements[this.elements.length] = item;
    this.print();
  }
  pop() {
    if (this.elements.length<1) {
      throw "array is empty";
    } else {
      this.elements.length = this.elements.length - 1;
      console.log(this.elements.length);
    }
    this.print();
  }
  top() {
    let top = this.elements.length - 1;
    return this.elements[top];
  }
  print():void {
    console.log(this.elements);
  }
}

let stack = new Stack();
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