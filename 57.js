var isPalindrome = function (s) {
  let str = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  console.log(str);
  return str === str.split("").reverse().join("");
};

let ans = isPalindrome("A man, a plan, a canal: Panama");
console.log(ans);
