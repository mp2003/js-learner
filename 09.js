// clone the Array
let arr1 = new Array('a', 'b', 'c');
// let arr2 = arr1.slice(0)       slice;
// let arr2 = [].concat(arr1)       concat;
let arr2= [...arr1];
// spread the array1 over the array2
console.log(arr1);
console.log(arr2);