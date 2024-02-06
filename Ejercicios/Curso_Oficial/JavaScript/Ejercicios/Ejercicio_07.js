function printName() {
    const helloName = "Hello John";
  
    function inner() {
      console.log(helloName);
    }
  
    // Utilizando setTimeout para imprimir el valor después de 1 segundo
    setTimeout(inner, 1000);
  }
  
  // Llamar a la función printName para ver el resultado después de 1 segundo
  printName();
  