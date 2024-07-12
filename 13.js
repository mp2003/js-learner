const user = [
  { userId: 1, username: "harshit" },
  { userId: 2, username: "mohit" },
  { userId: 3, username: "kamal" },
  { userId: 4, username: "hemal" },
  { userId: 5, username: "milind" },
];
console.log(user);

for (let userId of user) {
    console.log(userId.username);
}