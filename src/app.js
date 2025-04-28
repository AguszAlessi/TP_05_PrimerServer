import express from 'express';
import { obtenerHora, obtenerFechaCompleta } from './time.js';


const app = express();

app.get('/', (req, res) => {
    res.send("Hola");
});
app.get('/hora', (req, res) => {
    res.send(obtenerHora());
});

app.get('/fecha-completa', (req, res) => {
    res.send(obtenerFechaCompleta());
});

app.use((req, res) => {
    res.status(404).send('Ruta no encontrada');
});
export default app;   
