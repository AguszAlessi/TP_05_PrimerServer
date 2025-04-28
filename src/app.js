     
import express from 'express';
import ObtenerFecha from './time.js';  

const app = express();
app.use(express.json());
const port = 3000;

app.get('/', (req, res) => {
    res.json("Hola");
});
app.get('/fecha', (req, res) => {
    res.json(ObtenerFecha());
});