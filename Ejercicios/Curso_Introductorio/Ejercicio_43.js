//Aqui se me ocurren dos formas de hacerlo, una de ellas es de la siguiente manera:
/*const student = {
  id: 1,
  school: "Liceo",
  year: 3,
};

student.personalData = {
  name: "Nombre",
  surname: "Apellido",
  age: 18
};

console.log(student.personalData);*/
//Y la siguiente seria dentro del objeto:
const student = {
    id: 1,
    school: "Liceo",
    year: 3,
    personalData: {
      name: "Nombre",
      surname: "Apellido",
      age: 18
    }
  };
  
  console.log(student.personalData);

  //Cual de las dos seria la forma mas correcta y optima?? yo pienso que fuera del objeto.