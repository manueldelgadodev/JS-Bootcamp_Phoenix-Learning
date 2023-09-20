/*
🚀 JS 1: Creando Funciones en Js

Objetivo: Aprender a crear funciones en JavaScript. 📜

Consejos clave:
✅ Completá la función.
✅ Todo tu código tiene que ir adentro de las llaves de la función.
✅ Asegurate de usar el "return".
❗ ACLARACIÓN: "console.log()" no va a funcionar.
❌ No cambies los nombres de las funciones.
*/

// 1.Retornar un string.
function devolverString(str) {
    // 🎯 'Return' la string provista: str
    // Tu código:
    return str
}
let str = "Bienvenido a JS";
console.log(devolverString(str));

// 2.Retornar una suma.
function suma(x, y) {
    // "x" e "y" son números:
    // 🎯 suma "x" e "y" y retorná el valor
    // Tu código:
    let sumarResultado = x + y;
    return sumarResultado;
}
let x = 18;
let y = 20;
console.log(suma(x, y));

// 3.Retornar una resta.
function resta(x, y) {
    // 🎯 resta "y" e "x" y retorná el valor
    // Tu código:
    let restarResultado = x - y;
    return restarResultado;
}
let x = 20;
let y = 5;
console.log(resta(x, y));

// 4.Retornar una multiplicación.
function multiplicar(x, y) {
    // 🎯 multiplica "x" e "y" y retorná el valor
    // Tu código:
    let multiplicarResultado = x * y;
    return multiplicarResultado;
}
let x = 10;
let y = 10;
console.log(multiplicar(x, y));

// 5.Retornar una división.
function dividir(x, y) {
    // 🎯 dividí "x" e "y" y retorná el valor
    // Tu código:
    let dividirResultado = x / y;
    return dividirResultado;
}
let x = 20;
let y = 5;
console.log(dividir(x, y));

// 6.Comparar números.
function igualdad(x, y) {
    // 🎯 Devolvé "true" si "x" e "y" son iguales, de lo contrario devolvé "false".
    // Tu código:
    if (x === y) {
        return "True";
    } else {
        return "False";
    }
}
let x = 18;
let y = 18;
console.log(igualdad(x, y));
console.log(igualdad(18, 100));

// 7.Comparar la longitud de dos strings.
function compararLongitur(str1, str2) {
    // 🎯 Devolvé "true" si las dos strings tienen la misma longitud, de lo contrario devolvé "false".
    // Tu código:
    let longitud1 = str1.length;
    let longitud2 = str2.length;
    if (longitud1 === longitud2) {
        return "True";
    } else {
        return "False";
    }
}
let str1 = "Vamos al mundial";
let str2 = "Vamos al mundial";
console.log(compararLongitur(str1, str2));
console.log(compararLongitur("Vamos al mundial", "Vamos"));

// 8.Comparar un parámetro I.
function menorQueNoventa(num) {
    // 🎯 Devolvé "true" si el parametro de la funcion "num" es menor que noventa, de lo contrario devolvé "false".
    // Tu código: 
    if (num < 90) {
        return "True";
    } else {
        return "False";
    }
}
let num = 89;
console.log(menorQueNoventa(num));
console.log(menorQueNoventa(90));

// 9.Comparar un parámetro II.
function mayorQueCincuenta(num) {
    // 🎯 Devolvé "true" si el parametro de la funcion "num" es mayor que cincuenta, de lo contrario devolvé "false".
    // Tu código:
    if (num > 50) {
        return "True"
    } else {
        return "False"
    }
}
let num = 50;
console.log(mayorQueCincuenta(num));
console.log(mayorQueCincuenta(51));

// 10.Retornar el módulo o resto.
function obtenerResto(x, y) {
    // 🎯 Obtener el resto de la división de "x" e "y".
    // Tu código:
    let restoResultado = x % y;
    return restoResultado;
}
let x = 5;
let y = 7;
console.log(obtenerResto(x, y));

// 11.Comprobar si es par.
function esPar(num) {
    // 🎯 Devolvé "true" si "num" es par, de lo contario devolvé "false".
    // Tu código:
    let par = 2;
    if (num % par === 0) {
        return "True";
    } else {
        return "False";
    }
}
let num = 20;
console.log(esPar(num));
console.log(esPar(19));

// 12.Comprobar si es impar.
function esImpar(num){
    // 🎯 Devolvé "true" si "num" es impar, de lo contario devolvé "false".
    // Tu código: 
    let par = 2;
    if (num % par !== 0) {
        return "True";
    } else {
        return "False";
    }
}
let num = 19;
console.log(esImpar(num));
console.log(esImpar(20));

// 13.Elevar un número al cuadrado.
function elevarAlCuadrado(num) {
    // 🎯 Devolvé el valor de "num" elevado al cuadrado.
    // Tu código:
    let cuadrado = 2;
    let elevarResultado = Math.pow(num, cuadrado);
    return elevarResultado;
}
let num = 2;
console.log(elevarAlCuadrado(num));

// 14.Elevar un número al cubo.
function elevarAlCubo(num) {
    // 🎯 Devolvé el valor de "num" elevado al cubo.
    // Tu código: 
    let cubo = 3;
    let elevarResultado = Math.pow(num, cubo);
    return elevarResultado;
}
let num = 3;
console.log(elevarAlCubo(num));

// 15.Elevar un número a un exponente.
function elevar(num, exponent) {
    // 🎯 Devolvé el valor de "num" elevado al exponente dado en "exponent".
    // Tu código: 
    let exponente = 5;
    let elevarResultado = Math.pow(num, exponente);
    return elevarResultado;
}
let num = 4;
console.log(elevar(num));

// 16.Redondear un número.
function redondearNumero(num) {
    // 🎯 Devolvé el valor de "num" redondeado al entero más próximo.
    // Tu código:
    let redonderResultado = Math.round(num);
    return redonderResultado;
}
let num = 100.46;
console.log(redondearNumero(num));

// 17.Redondear un número hacia arriba.
function redondearHaciaArriba(num) {
    // 🎯 Devolvé el valor de "num" redondeado hacia arriba (al próximo entero).
    // Tu código: 
    let redonderResultado = Math.ceil(num);
    return redonderResultado;
}
let num = 100.10;
console.log(redondearHaciaArriba(num));

// 18.Retornar un número aleatorio.
function numeroRandom() {
    // 🎯 Generar un número al azar entre 0 y 1 y devolverlo.
    // 🕵️ Pista: investigá que hace el método Math.random(). 
    // Tu código:
    let random = Math.random();
    return random;
}
console.log(numeroRandom());

// 19.Comparar si un numero es positivo.
function esPositivo(num) {
    // La función va a recibir un número entero. Devolvé como resultado una cadena de texto que indica si el número es positivo o negativo: 
    // 🎯 Si el número es positivo, devolver el string "Es positivo".
    // 🎯 Si el número es negativo, devolver el string "Es negativo".
    // 🎯 Si el número es 0, devolver false.
    // Tu código:
    if (num === 0) {
        return "False";
    } else if (num > 0) {
        return "Es positivo";
    } else {
        return "Es negativo";
    }
}
let num = 100;
console.log(esPositivo(num));
console.log(esPositivo(-1));
console.log(esPositivo(0));

// 20.Concatenar strings I.
function agregarSimboloDeExclamacion(str) {
    // 🎯 Agregá un símbolo de exclamación al final de la string "str" y devolvé una nueva string
    // Ejemplo: "hello world" pasaría a ser "hello wolrd!".
    // Tu código:
    let concatenado = str + "!";
    return concatenado;
}
let str = "hello world";
console.log(agregarSimboloDeExclamacion(str));

// 21.Concatenar strings II.
function combinarNombres(nombre, apellido) {
    // 🎯 Devolver "nombre" y "apellido" combinados en una string y separados por un espacio.
    // Ejemplo: "Diego", "Maldonado" => "Diego Maldonado".
    // Tu código:
    let concatenado = nombre + " " + apellido;
    return concatenado;
}
let nombre = "Juan";
let apellido = "Delgado";
console.log(combinarNombres(nombre, apellido));

// 22.Concatenar strings III.
function retornarSaludo(nombre) {
    // 🎯 Tomá la string "nombre" y concatená otras string en la cadena para que tome la siguiente forma:
    // "Diego" => "Hola Diego!".
    // Tu código:
    let saludo = "Hola";
    let concatenado = saludo + " " + nombre + "!";
    return concatenado;
}
let nombre = "Juan";
console.log(retornarSaludo(nombre));

// 23.Operaciones matemáticas I.
function areaDelRectangulo(alto, ancho) {
    // 🎯 Devolver el área de un rectángulo teniendo su altura y ancho.
    // 🕵️ Pista: investigá como se calcula el area de un rectángulo. 
    // Tu código:
    let areaRectangulo = alto * ancho;
    return areaRectangulo;
}
let alto = 6;
let ancho = 2;
console.log(areaDelRectangulo(alto, ancho));

// 24.Operaciones matemáticas II.
function perimetroDelCuadrado(lado) {
    // 🎯 Escibí una función a la cual reciba el valor del lado de un cuadrado y retorne su perímetro.
    // 🕵️ Pista: investigá como se calcula el perímetro de un cuadrado. 
    // Tu código:
    perimetroCuadrado = lado * 4;
    return perimetroCuadrado;
}
let lado = 8;
console.log(perimetroDelCuadrado(lado));

// 25.Operaciones matemáticas III.
function areaDelTriangulo(base, altura) {
    // 🎯 Desarrollá una función que calcule el área de un triángulo.
    // 🕵️ Pista: investigá como se calcula el área de un triángulo. 
    // Tu código:
    let areaTriangulo = ((base * altura) / 2);
    return areaTriangulo;
}
let base = 4;
let altura = 8;
console.log(areaDelTriangulo(base, altura));

// 26.Operaciones matemáticas IV.
function deEuroAdolar(euro) {
    // Supongamos que 1 euro equivale a 1.20 dólares.
    // 🎯 Escribí un programa que reciba como parámetro un número de euros y calcule el cambio en dólares.
    // Tu código:
    let euroADolar = 1.20;
    let tipoCambioDolar = euro * euroADolar;
    return tipoCambioDolar;
}
let euro = 20;
console.log(deEuroAdolar(euro));

// 27.Condicionales.
function esVocal(letra) {
    // 🎯 Escribí una función que reciba una letra y, si es una vocal, muestre el mensaje "Es vocal".  
    // 🎯 Verificar si el usuario ingresó un string de más de un carácter y, en ese caso, informarle que no se puede procesar el dato mediante el mensaje "Dato incorrecto". 
    // Tu código:
    if (letra.length !== 1) {
        return "Dato incorrecto";
    } else {
        let vocales = ["a", "e", "i", "o" ,"u"];
        for (var i = 0; i < vocales.length; i++) {
            if (letra == vocales[i]) {
                return "Es vocal";
            } else {
                return "No es vocal";
            }
        }
    }
}
let letra = "a";
console.log(esVocal(letra));
console.log(esVocal("r"));
console.log(esVocal("ole"));