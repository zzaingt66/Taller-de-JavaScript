/* 1. Hola Mundo Creativo
Tema: Introducción a JavaScript
Ejercicio: Escribe un código que muestre un saludo personalizado en la consola. Usa prompt para pedir al usuario su nombre y crea un mensaje que diga "¡Hola [nombre]! Bienvenido al taller de JavaScript". */

let nombre = prompt("¿Cómo te llamas?");
let saludo = console.log(` ¡Hola ${nombre}! Bienvenido al taller de JavaScript.`)


/* 2. Variables Interactivas
Tema: Uso de let y const
Ejercicio: Crea un programa que pida al usuario su edad usando prompt. Usa let para la edad y const para almacenar un mensaje que diga "Tu edad es [edad]". Muestra el mensaje en la consola. */

let edad = parseInt(prompt("¿Cuál es su edad?"))
const mensaje = console.log(`Tu edad es ${edad}`)

/* 3. Investigando el Uso de if
Tema: Condicionales (investigación)
Ejercicio: Investiga cómo funciona la estructura if en JavaScript. Luego, escribe un ejemplo simple de cómo usar if para mostrar un mensaje en la consola basado en la comparación de dos variables numéricas. Asegúrate de que tu código sea funcional y de explicar cómo lo has utilizado en un comentario. */
if (edad >= 18) { /* Utilice la misma lógica que en python cambiado su syntax para verificar si la edad es mayor o menor a 18 años*/
  mensajeMayoriaEdad = console.log("Felidades, cumples con la mayoria, puedes entrar.")
} else if (edad < 0){
  mensajeError  = console.log("El número ingresado es incorrecto")
} else {
  mensajeNoMayoriaEdad = console.log("Aún no cumples con la mayoria de edad.")
}

/* 4. Calculadora de Operaciones
Tema: Operadores Aritméticos
Ejercicio: Crea una pequeña calculadora.
Pide al usuario dos números mediante prompt.
Pregunta qué operación desea realizar (suma, resta, multiplicación o división).
Realiza la operación elegida y muestra el resultado en la consola. */
let eleccionOperador = prompt("1. Suma  2. Resta  3. Multiplciacion  4. División ");
let num1 = parseInt(prompt("Ingrese el primer número: "));
let num2 = parseInt(prompt("Ingrese el segundo número: "))


if (eleccionOperador == "4" && num2 > 0){
  let division = num1 / num2;
  console.log(`El resultado de la división es ${division}`)
} else if(eleccionOperador == "1"){
  let suma = num1 + num2;
  console.log(`El resultado de la división es ${suma}`)
} else if(eleccionOperador == "2"){
  let resta = num1 - num2;
  console.log(`El resultado de la división es ${resta}`)
} else if(eleccionOperador == "3"){
  let multiplicacion = num1 * num2;
  console.log(`El resultado de la división es ${multiplicacion}`)
} else if(eleccionOperador == "4" && num2 == 0){
  console.log("No se puede dividir por 0")
}else{
  console.log("Opción incorrecta de operador incorrecta")
}

/* 5. Comparando Números
Tema: Operadores de Comparación
Ejercicio: Crea un programa que pida al usuario dos números.
Asigna estos números a dos variables y muestra en la consola si el primer número es mayor que el segundo utilizando un operador de comparación.
Usa un segundo operador de comparación para mostrar si son iguales. */

let nToCompare1 = parseInt(prompt("Ingrese el primer número: "));
let nToCompare2 = parseInt(prompt("Ingrese el segundo número: "))

if (nToCompare1 > nToCompare2){
  console.log(`El número ${nToCompare1} es mayor que ${nToCompare2}`)
} else if (nToCompare1 == nToCompare2){
  console.log(`Ambos números ${nToCompare1} ${nToCompare2} son iguales`)
} else if(nToCompare1 < nToCompare2){
  console.log(`El número ${nToCompare1} es menor que ${nToCompare2}`)
}