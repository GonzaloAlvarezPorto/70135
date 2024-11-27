const sumar = (num1, num2) => {
    if (!num1 || !num2){
        return 0;
    }
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        return null;
    }

    return num1 + num2;
}

let testPasados = 0;
let testTotales = 4;

console.log("Test 1: La función debe devolver null si algún parámetro no es numérico.");

const resultado1 = sumar("2", 2);

if (resultado1 === null) {
    console.log("Test 1 pasado");
    testPasados++;
}
else {
    console.log(`Test 1 no ha pasado se esperaba null y se recibió ${typeof resultado1}`)
}

//----------------------------------------
console.log("Test 2: La función debe devolver 0 si no se pasó ningún parámetro.");

const resultado2 = sumar();

if (resultado2 === 0) {
    console.log("Test 2 pasado");
    testPasados++;
}
else {
    console.log(`Test 2 no ha pasado y se recibió ${typeof resultado2} pero se esperaba 0`)
}

//----------------------------------------
console.log("Test 3: La función debe devolver el resultado correctamente.");

const resultado3 = sumar(2, 3);

if (resultado3 === 5) {
    console.log("Test 3 pasado");
    testPasados++;
}
else {
    console.log(`Test 3 no ha pasado y se hizo mal la suma`)
}