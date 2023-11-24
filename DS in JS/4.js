// sets implementation

function MySets() {
  var collection = [];

  this.has = (Element) => {
    for (const element of collection) {
      if (element === Element) return true;
    }
    return false;
  };

  this.add = (Element) => {
    if (this.has(Element)) return false;

    collection.push(Element);
    return true;
  };

  this.values = () => {
    return collection;
  };

  this.remove = (Element) => {
    if (!this.has(Element)) return false;

    let index = collection.indexOf(Element);
    collection.splice(index, 1);
    return true;
  };
  this.union = function (otherSet) {
    var unionSet = new MySets();
    var firstSet = this.values();
    var secondSet = otherSet.values();
    firstSet.forEach(function (e) {
      unionSet.add(e);
    });
    secondSet.forEach(function (e) {
      unionSet.add(e);
    });
    return unionSet;
  };

  this.diffrence = function (otherSet) {
    var diffSet = new MySets();
    var firstSet = this.values();
    firstSet.forEach(function (e) {
      if (!otherSet.has(e)) diffSet.add(e);
    });
    return diffSet;
  };

  this.intersection = function (otherSet) {
    var intersectSet = new MySets();
    var firstSet = this.values();

    firstSet.forEach(function (e) {
      if (otherSet.has(e)) intersectSet.add(e);
    });

    return intersectSet;
  };
  this.subset = function (otherSet) {
    var subsets = new MySets();
    firstSet = this.values();
    firstSet.every(function (e) {
      if (otherSet.has(e)) subsets.add(e);
    });
    return subsets;
  };
}

var Sets = new MySets();
Sets.add(6);
Sets.add(7);
Sets.add(8);
console.log(Sets.values());
console.log(Sets.has(8));
Sets.remove(8);
console.log(Sets.values());

var anotherSet = new MySets();
anotherSet.add(1);
anotherSet.add(2);
anotherSet.add(6);

var union = Sets.union(anotherSet);
var intesection = Sets.intersection(anotherSet);
var diffrence = Sets.diffrence(anotherSet);
var subset = Sets.subset(anotherSet);
console.log(`union set :  [${union.values()}]`);
console.log(`intersection set : [${intesection.values()}]`);
console.log(`diffrence set : [${diffrence.values()}]`);
console.log(`subset set : [${subset.values()}]`);
