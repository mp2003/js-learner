// function isEven(num) {
//   return num % 2 == 0;
// }

// console.log(isEven(10));

// function str(str) {
//   return str[0];
// }

// console.log(str("milind"));

// function func(arr , num) {
//     for(let i in arr){
//         if (arr[i] === num)
//             return i;
//         else
//             console.log('number mismatch');
//         }

// }

// const array = [1, 2, 3, 4, 5];
// let m = func(array,4)
// console.log(m);
const func = (arr, value) => {
    for (var i = 0; i < arr.length; i++) {
        console.log(i);
  };
  return arr[i]!=value ? i:"num   mismatch" ;

}
  const arr = [1, 2, 3, 4, 5, 6];
  console.log(func(arr, 4));
  