function encode(strs) {
  let map = new Map();
  //   console.log(strs, String.fromCharCode(1));
  for (let i = 0; i < strs.length; i++) {
    map.set(strs[i], i % 2 === 0 ? "." : "-");
  }
  console.log(Array.from(map.values()).join(""));
  return Array.from(map.values()).join("");
}

encode(["neet", "code", "love", "you"]);
