var MyHashMap = function () {
    this.map = new Array();
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
MyHashMap.prototype.put = function (key, value) {
    if (this.map[key] === undefined) this.map[key] = value;
    else this.map[key] = value;
};

/** 
 * @param {number} key
 * @return {number}
 */
MyHashMap.prototype.get = function (key) {
    if (this.map[key] === undefined) return -1;
    else return this.map[key];
};

/** 
 * @param {number} key
 * @return {void}
 */
MyHashMap.prototype.remove = function (key) {
    this.map.splice(key,1);
};