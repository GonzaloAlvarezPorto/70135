const login = (user, psw) => {
    if(!psw) return "No password";
    if(!user) return "No user";
    if(user !== 'coderUser' || psw !== '123'){
        return 'credenciales incorrectas'
    }
    return "logueado";
}

let testPasados = 0;
let testTotales = 4;

//TEST 1
console.log("Test 1: La psw no debe estar vacía");
const resultado1 = login("gonzaalvarezporto","");
if(resultado1==="No password"){
    console.log("Test 1 pasado");
    testPasados++;
}
else{
    console.log("El test 1 no ha pasado");
}

//TEST 2
console.log("Test 2: El usuario no debe estar vacío");
const resultado2 = login("","12345");
if(resultado2 === "No user"){
    console.log("Test 2 pasado");
    testPasados++;
}
else{
    console.log("El test 2 no ha pasado");
}

//TEST 3
console.log("Test 3: El usuario y la constraseña son incorrectas");
const resultado3 = login("gonzaalvarezporto","ppackk");
if(resultado3 === 'credenciales incorrectas'){
    console.log("Test 3 pasado");
    testPasados++
}
else{
    console.log("El test 3 no ha pasado")
}

//TEST 4
console.log("Test 4: Debe loguearse correctamente");
const resultado4 = login("coderUser","123");
if(resultado4 === 'logueado'){
    console.log("Test 4 pasado");
    testPasados++
}
else{
    console.log("El test 4 no ha pasado")
}

console.log(`Han pasado ${testPasados} tests de ${testTotales} tests totales`)