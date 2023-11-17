//Utilice secuencia de esca ANSI '\x1b[31m' para poner la linea de tipo de variable en rojo para qeu nsalga todo del mismo color y sea un poco mas leible

// Primer paso creo la variable dandole valor true
let variable = true;
//Imprimimos el primer paso en pantalla
console.log("Valor variable original ", variable, '\x1b[31m'," \nTipo de variable; ", typeof variable);

//La convierto a variable numerica
let Nvariable = Number(variable);
console.log("\nValor Numerico", Nvariable, '\x1b[31m',"\nTipo de Variable: ", typeof Nvariable);

//Mismo paso pero cambiandolo a String
let Svariable = String(variable);
console.log("\nValor como String", Svariable, '\x1b[31m',"\nTipo de Variable: ", typeof Svariable);

//Por ultimo de tipo boolean
let Bvariable = Boolean(variable);
console.log("\nValor como booleano", Bvariable, '\x1b[31m',"\nTipo de Variable: ", typeof Bvariable);

