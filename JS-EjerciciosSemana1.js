/*
**EJERCICIO 1**
Crea una función llamada "sumar" que reciba 2 números por parámetros y retorne 
el resultado de la suma.
*/

function sumar(numeroUno, numeroDos) {
  let sumarResultado = numeroUno + numeroDos;
  console.log(sumarResultado);
  return sumarResultado;
}

let numeroUno = 10;
let numeroDos = 15;
console.log(sumar(numeroUno, numeroDos));

/*
**EJERCICIO 2**
Crea una función llamada "multiplicar" que reciba 2 números por parámetros y 
retorne el resultado de la multiplicación. Además, verifica si ambos parámetros 
son números; si alguno no lo es, debe devolver el siguiente mensaje: 
"Ambos parámetros deben ser números."
*/

function multiplicar(numeroUno, numeroDos) {
  if (typeof(numeroUno) === "number" && typeof(numeroDos) === "number") {
    let multiplicarResultado = numeroUno * numeroDos;
    return multiplicarResultado;
  } else if (typeof(numeroUno) === "string" && typeof(numeroDos) === "string") {
    return "Ambos parámetros deben ser números.";
  } else {
    return "Ambos parámetros deben ser números.";
  }
}

let numeroUno = 15;
let numeroDos = 10;
console.log(multiplicar(numeroUno, numeroDos));
console.log(multiplicar("Hola", numeroDos));
console.log(multiplicar("Hola", "Mundo"));

/*
**EJERCICIO 3**
Crea una función llamada "esInvierno" que reciba por parámetro el mes y devuelva `true` 
si es un mes de invierno o `false` en caso contrario. 
Meses de invierno: junio, julio, agosto.
*/

function esInvierno(mes) {
  let mesesInvierno = ["Junio", "Julio", "Agosto"];
  let existe = false;
  for (var i = 0; i < mesesInvierno.length; i++) {
    if (mes == mesesInvierno[i]) {
      existe = true;
      console.log("Si existe");
      break;
    }
  }
  return existe;
}

let mes = "Julio";
console.log(esInvierno(mes));
console.log(esInvierno("Enero"));

/*
**EJERCICIO 4**
Crea una función llamada "esCovid" que reciba por parámetro dos arrays: 
uno con los síntomas que posee el paciente y otro con los síntomas del COVID-19. 
Si coinciden 2 o más síntomas, debe retornar `true`, indicando que es COVID-19; 
de lo contrario, retorna `false`.

**ARRAYS PARA PROBAR**
- Síntomas del paciente enfermo: ["fiebre", "dolor muscular", "vómitos"]
- Síntomas del paciente no enfermo: ["fiebre", "titila ojo", "vómitos"]
- Síntomas del COVID-19: ["fiebre", "dolor muscular", "pérdida de gusto"]
*/

function esCovid(sintomasPaciente, sintomasCovid){
  let existeSintomas = 0;

  for(i = 0; i < sintomasPaciente.length; i++) {
      if(sintomasCovid.includes(sintomasPaciente[i])) {
          existeSintomas++;
      }
  }

  if(existeSintomas >= 2) {
      console.log(existeSintomas);
      console.log(true);
      return true;
  } else {
      console.log(existeSintomas);
      console.log(false);
      return false;
  }
}

let sintomasPaciente = ["fiebre", "dolor muscular", "vómitos"];
let sintomasCovid = ["fiebre", "dolor muscular", "pérdida de gusto"];
let sinSintomasPaciente = ["fiebre", "titila ojo", "vómitos"];

console.log(esCovid(sintomasPaciente, sintomasCovid));
console.log(esCovid(sinSintomasPaciente, sintomasCovid));
console.log(esCovid(["dolor de cabeza" ,"fiebre", "dolor muscular", "pérdida de gusto"], sintomasCovid));

/*
**EJERCICIO 5**
Crea la función "horarioCursada" que recibe por parámetro la materia 
y debe devolver el día y la hora en que se cursa. En caso de que la materia 
no se encuentre en el sistema, retorna el mensaje "MATERIA NO ENCONTRADA."

EJEMPLOS:
- MATEMÁTICA → JUEVES
- LENGUA → LUNES
- GEOGRAFÍA → VIERNES
- PROGRAMACIÓN → MATERIA NO ENCONTRADA
*/

function horarioCursada(materia) {
  switch(materia) {
      case "MATEMÁTICA":
          return "JUEVES";
          break;
      case "LENGUA":
          return "LUNES";
          break;
      case "GEOGRAFÍA":
          return "VIERNES";
          break;
      default:
          return "MATERIA NO ENCONTRADA"
  }
}

let materia = "PROGRAMACIÓN";
console.log(horarioCursada(materia));
console.log(horarioCursada("MATEMÁTICA"));
console.log(horarioCursada("LENGUA"));
console.log(horarioCursada("GEOGRAFÍA"));