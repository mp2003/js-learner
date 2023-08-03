const arr =  [1,2,3,4,5,1,2,3,16,18,19,20,21,15];
const uniqueElements = new Set(arr);
console.log(uniqueElements);
let length = 0;
for(let element of uniqueElements){
    length++;
}
console.log(length);