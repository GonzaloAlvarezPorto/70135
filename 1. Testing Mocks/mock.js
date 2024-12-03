import express from 'express';
import userRoutes from './users.routes.js';

const app = express();
const PORT = 8080;

app.use('/api/users', userRoutes);

app.listen(PORT, () => {
    console.log(`Escuchando puerto ${PORT}`)
})