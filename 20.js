var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const arr=array.map((number) => {
  return number * number;
});

//map: create a new array
 console.log(array);
 console.log(arr);

  
arr.forEach((array,number,arr) => {
    console.log(array,number+1,arr);
// console.log(array-number);

})