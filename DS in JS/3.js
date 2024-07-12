// stack implementation

function myStack() {
  this.count = 0;
  this.stack = {};

  this.print = () => {
    return this.stack;
  };

  this.push = (element) => {
    this.stack[this.count] = element;
    this.count++;
  };
  this.pop = () => {
    if (this.isEmpty) {
      return undefined;
    } else {
      this.count--;
      var removedElement = this.stack[this.count];
      delete this.stack[this.count];
      return removedElement;
    }
  };
  this.peek = () => {
    return this.stack[this.count - 1];
  };
  this.size = () => {
    return this.count;
  };
  this.isEmpty = () => {
    if (this.count === 0) return true;
    return false;
  };
}

var stack = new myStack();
stack.push(6);
stack.push(5);
stack.push(4);
stack.push(1);
stack.push(2);
console.log(stack.peek());
console.log(stack.size());
console.log(stack.print());
