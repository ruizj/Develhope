function printName() {
    // Variable dentro de la función que actúa como un closure
    const helloName = "Hello John";
  
    // Función interna que accede a la variable dentro del closure
    function inner() {
      return helloName;
    }
  
    // Imprimir el valor de helloName llamando a la función inner
    console.log(inner());
  }
  
  // Llamar a la función printName para ver el resultado en la consola
  printName();
  