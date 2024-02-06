const person1 = {
    firstName: "John",
    lastName: "Doe",
    age: 25,
  };
  
  const person2 = person1;  // Ambas variables ahora apuntan al mismo objeto en memoria.
  
  // Modificamos la propiedad `firstName` del objeto `person2` a "Simon".
  person2.firstName = "Simon";
  
  console.log(person1);
  // El objeto `person1` también se ve afectado por el cambio en `person2`.
  // Salida: { firstName: "Simon", lastName: "Doe", age: 25 }
  
  console.log(person2);
  // Salida: { firstName: "Simon", lastName: "Doe", age: 25 }
  
  // La variable `person2` no apunta a un objeto diferente.