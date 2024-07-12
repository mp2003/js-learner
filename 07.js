var addInput = () => {
  var input = document.getElementById("number");
  var inputValue = parseInt(input.value);
  if (isNaN(inputValue)) alert("not a number");
  else {
    let addfive = inputValue + 5;
    var showresult = document.getElementById("result");
    showresult.textContent = "result: " + addfive;
  }
};
