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
