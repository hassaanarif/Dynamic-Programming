class Stack {
  constructor() {
    this.list = [];
  }

  peek() {
    this.list[this.list.length - 1];
    console.log(this.list);
  }

  push(item) {
    this.list.push(item);
    console.log(this.list);
  }
  pop() {
    this.list.pop();
    console.log(this.list);
  }
}

let stackObject = new Stack();

stackObject.peek;
stackObject.push(1);
