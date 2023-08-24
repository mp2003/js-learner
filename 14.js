const user = [
  { userId: 1, username: "harshit" },
  { userId: 2, username: "mohit" },
  { userId: 3, username: "kamal" },
  { userId: 4, username: "hemal" },
  { userId: 5, username: "milind" },
];

  const [ user1 , user2 , user3 , user4]=user;
  // console.log(user1,user2,user3,user4);

const [{ userId }, , , , { username }] = user;
console.log(userId, username);
