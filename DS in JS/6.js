// priority queue implementation

function PriorityQueue() {
  var collection = [];

  this.print = () => {
    return collection;
  };

  this.size = () => {
    return collection.length;
  };

  this.isEmpty = () => {
    return collection.length === 0;
  };

  this.enQueue = (element) => {
    if (this.isEmpty()) collection.push(element);
    else {
      var added = false;
      for (var i = 0; i < this.size(); i++) {
        if (element[1] > collection[i][1]) {
          collection.splice(i, 0, element);
          added = true;
          break;
        }
      }
      if (!added) collection.push(element);
    }
  };
  this.deQueue = () => {
    return collection.shift();
  };

  this.front = () => {
    return collection[0];
  };
}

var MyQueue = new PriorityQueue();

MyQueue.enQueue(["foo", 5]);
MyQueue.enQueue(["bar", 1]);
MyQueue.enQueue(["hell", 4]);
MyQueue.enQueue(["bii", 3]);

console.log(MyQueue.print());

console.log(MyQueue.deQueue());

console.log(MyQueue.front());

console.log(MyQueue.size());
