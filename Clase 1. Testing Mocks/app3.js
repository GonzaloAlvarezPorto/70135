const sumar = (...nums) => {
    if(nums.length === 0) return 0;
    if(!nums.every(num => typeof num === 'number')) return null;
    return nums.reduce((prev, current) => prev + current);
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

//----------------------------------------
console.log("Test 4: La función debe sumar correctamente con más de dos parámetros.");

const resultado4 = sumar(1, 2, 3, 4);

if (resultado4 === 10) {
    console.log("Test 4 pasado");
    testPasados++;
}
else {
    console.log(`Test 4 no ha pasado y se hizo mal la suma`)
}


console.log(`Han pasado ${testPasados} test de ${testTotales}`)