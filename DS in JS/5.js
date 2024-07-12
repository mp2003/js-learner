// queue implemanation

function MyQueue() {
  var collection = [];

  this.print = () => {
    return collection;
  };

  this.enQueue = (element) => {
    return collection.push(element);
  };

  this.deQueue = () => {
    return collection.shift();
  };

  this.front = () => {
    return collection[0];
  };

  this.size = () => {
    return collection.length;
  };

  this.isEmpty = () => {
    return collection.length === 0 ? true : false;
  };
}

var newQueue = new MyQueue();
newQueue.enQueue(1);
newQueue.enQueue(2);
newQueue.enQueue(3);

console.log(newQueue.print());

console.log(newQueue.deQueue());

console.log(newQueue.print());

console.log(newQueue.size());
