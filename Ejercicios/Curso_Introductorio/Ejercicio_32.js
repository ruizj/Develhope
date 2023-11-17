function printName() {
    console.log("Cosimo");
  }
  
  function sayHelloName(callback) {
    console.log("Hola");
  
    setTimeout(function() {
      callback();
    }, 1000); // 1000 milisegundos (1 segundo) de retardo
  }
  
  sayHelloName(printName);