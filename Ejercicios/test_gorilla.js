function mimumEven(numero1, numero2, numero3) {
    // Encontrar el mínimo de los tres números usando la función Math.min()
    let minimo = Math.min(numero1, numero2, numero3);
  
    // Comprobar si el mínimo es un número par
    let isEven = minimo % 2 === 0;
  
    return isEven;
  }
  