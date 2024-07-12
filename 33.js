const Default ={
    name:'',
    age:0,
    email:null,
    adresss:null,
}

const createUser = (name, age, email) => {
  const obj = Object.create(Default);
  obj.name = name;
  obj.age = age;
  obj.email = email;
  return obj;
};
const user = createUser('milind',21,'m.p6092003@gmail.com'); 
console.log(user);
console.log(user.adresss);