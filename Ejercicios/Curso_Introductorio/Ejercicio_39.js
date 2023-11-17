let user = {
    name: "Cosimo",
    age: 30,
  };
  
  let newUser = { ...user }; // Copia del objeto user
 
  /* otra manera de copiar un objeto seria 
  let newUser = Object.assign({}, user);*/

  newUser.name = "Paolo";
  
  console.log(newUser); 
  console.log(user);