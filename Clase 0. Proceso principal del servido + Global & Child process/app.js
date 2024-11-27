import { fork } from 'child_process';
import express from 'express';

const app = express();

let visits = 0;

app.get('/', (req, res) => {
    visits++
    res.send(`El sitio se visitó ${visits} veces`)
})

app.get('/calc-bloq', (req, res) => {
    let suma = 0;
    for (let i = 0; i < 5e2; i++) {
        suma += i;
    }

    res.send({suma})
})

app.get('/no-bloq', (req, res) => {
    const computo = fork('./operacionCompleja.js');
    computo.send('start');
    computo.on('message', resultado => {
        res.send({resultado})
    })
})

app.listen(8080, () => {
    console.log(`Escuchando puerto 8080`)
})