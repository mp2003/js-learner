var variableSizedArray = (arr, query) => {
  for (var i = 0; i < query.length; i++) {
    var [array_index, array_element] = query[i];
    if (arr[array_index] && arr[array_index][array_element])
      console.log(arr[array_index][array_element]);
    else console.log("element not defined");
  }
};

var arr = [
  [1, 5, 4],
  [1, 2, 8, 9, 3],
];

var query = [
  [0, 6],
  [1, 3],
];

variableSizedArray(arr, query);
