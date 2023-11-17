/*
Dado un numero positivo como entrada, devuelve el factorial de ese numero.El factorial es el producto de cada numero positivo menor o igual que ese. el factorial de 0 es 1 . */

function factorial(n) {
    if (n === 0) {
      return 1; // Caso base: el factorial de 0 es 1
    } else {
      return n * factorial(n - 1); // Llamada recursiva
    }
  }
  
  
  const numero = 5; // El factorial de 5 es 120 1*2*3*4*5
  const resultado = factorial(numero);
  
  console.log(`El factorial de ${numero} es ${resultado}`);