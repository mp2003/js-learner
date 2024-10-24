
var MyHashSet = function () {
    this.set = new Array();
};

/** 
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.add = function (key) {
    // let length = this.set.length;
    if (!this.set.includes(key)) {
        this.set.push(key);
    }
};

/** 
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.remove = function (key) {
    console.log(this.set.indexOf(key));
    let i = this.set.indexOf(key);
    this.set.splice(i, 1)
};

/** 
 * @param {number} key
 * @return {boolean}
 */
MyHashSet.prototype.contains = function (key) {
    // console.log(this.set.includes(key));
    
    return this.set.includes(key);
};

let myHashSet = new MyHashSet()
myHashSet.add(1);      // set = [1]
myHashSet.add(2);      // set = [1, 2]
myHashSet.add(2);      // set = [1, 2]
myHashSet.remove(2)

myHashSet.contains(1); // return True
myHashSet.contains(3); // return False, (not found)
myHashSet.add(2);      // set = [1, 2]
console.log(myHashSet);
myHashSet.contains(2); // return True
myHashSet.remove(2);   // set = [1]
myHashSet.contains(2); // return False, (already removed)
