let todo = [];
let req = prompt("lik kuch");

while (true) {
  if (req == "quit") {
    console.log("quitting ");
    break;
  } else if (req === "add") {
    let task = prompt("taks ::");
    todo.push(task);
    console.log("task added");
  } else if (req === "list") {
    console.log(todo);
    for (let task of todo) {
      console.log(task);
    }
    console.log("---------");
  }

  req = prompt("lik kuch");
}
