import express from 'express';
import compression from 'express-compression';
import usersRoutes from './routes/users.js'
import errorHandler from './middleware/errors/index.js'

const app = express();

app.use(express.json());

// app.use(compression());

app.use(compression({
    brotli: {
        enabled: true,
        zlib: {}
    }
}));

app.get('/stringridiculamentegrande', (req, res) => {
    const stringLarga = 'Hola mundo: soy una string ridículamente larga!'.repeat(100000);
    res.send(stringLarga);
})

app.use('/api/users', usersRoutes);
app.use(errorHandler);

app.listen(8080, () => {
    console.log('Listening en 8080')
})