function multiplyByTwo(x) {
  const number = 2;

  // Función interna que multiplica el parámetro por la variable number
  function inner() {
    return x * number;
  }

  // Devolver la función interna, creando un closure
  return inner;
}

// Llamar a multiplyByTwo con el valor 4 y luego llamar a la función interna resultante
const resultFunction = multiplyByTwo(4);
const result = resultFunction();

// Imprimir el resultado en la consola
console.log(result); // Salida: 8
