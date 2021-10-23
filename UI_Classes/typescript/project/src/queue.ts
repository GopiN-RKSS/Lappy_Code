interface Iqueue {
  enqueue(item:number):number,
  dequeue():void,
  peek():number,
  isEmpty(): boolean,
  isFull(): boolean,
  size(): number;
  print():void
}

class Queue implements Iqueue{
  private array: number[];
  private arraySize:number = 0;

  set queueSize(length: number) {
    this.arraySize = length;
  }
  get queueSize() {
    return this.arraySize;
  }

  constructor() {
    this.array = [];
    
  }
  enqueue(item: number) {
    if (this.array.length < this.arraySize) {
      return this.array.unshift(item);
      
    } else {
      console.log("size is full");
    }
  }
  dequeue() {
    if (this.array.length<1) {
      throw "array is empty";
    } else {
      this.array.pop();
    }
  }
  isEmpty() {
    return this.array.length == 0;
  }
  peek() {
    let peek = this.array.length-1;
    return peek;
  }
  isFull() {
    return (this.array.length === this.arraySize)?true:false;
  }
  size(){
    return this.array.length;
  }
  
  print(){
      console.log(this.array);
  }
  
}

let queue = new Queue();
queue.queueSize = 5;
queue.enqueue(5);
queue.enqueue(1);
queue.enqueue(4);
queue.enqueue(4);
queue.enqueue(10);
queue.enqueue(4);
queue.print();
