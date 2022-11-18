import express from 'express';
export const router = express.Router();

router.get('/', (req, res) => {
    res.send('Bienvenidos a Node JS desde la raíz 😁✔');
});

router.get('/login', (req, res) => {
    res.send('Bienvenidos a Node JS desde el login 😎✌');
});

router.post('/agregar', (req, res) => {
    res.send('Archivo agregado con éxito');
});

router.delete('/delete', (req, res) => {
    res.send('Archivo eliminado con éxito');
});

export default router;