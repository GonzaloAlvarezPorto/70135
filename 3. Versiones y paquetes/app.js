import express from 'express';

const app = express();

app.get('/', (req, res) => {
    res.send('Hola mundo!!!');
});

app.listen(8080, () => {
    console.log('Escuchando en 8080!!!')
});