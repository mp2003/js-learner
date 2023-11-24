// stack implementation

function stack() {
  var collection = [];
  var word = prompt("enter a word");
  var rword = "";
  for (let i = 0; i < word.length; i++) collection.push(word[i]);
  for (let i = 0; i < word.length; i++) {
    rword += collection.pop();
  }
  console.log(word);
  console.log(rword);
  if (word === rword) console.log("palindrome");
  else console.log("not a palindrome");
}

stack();
