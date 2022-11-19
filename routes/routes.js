import express from 'express';
import {usuario} from '../models/usuario.js';
import { evento } from '../models/evento.js';
import { regevento, showevento, showoneevento, deleteevento, updateevento } from '../controllers/eventoscontrollers.js';
import { regusuario, showuser, showoneuser, deleteoneuser, updateuser } from '../controllers/usercontrollers.js';
import {db} from '../mongodb.js';

const evento1 = new evento();
const user1 = new usuario();
export const router = express.Router();


router.get('/', (req, res) => {
    res.send('Bienvenidos a Node JS desde la raíz 😁✔');
});

router.get('/login', (req, res) => {
    res.send('Bienvenidos a Node JS desde el login 😎✌');
});

//Rutas collection eventos

router.post('/regevento', regevento);
router.get('/show', showevento);
router.get('/showone/:id', showoneevento);
router.delete('/delevent/:id', deleteevento);
router.put('/upevent/:id', updateevento);

//Rutas collection usuarios

router.post('/reguser', regusuario);
router.get('/showuser', showuser);
router.get('/showuser/:id', showoneuser);
router.delete('/deluser/:id', deleteoneuser);
router.put('/upuser/:id', updateuser);


router.post('/agregar', (req, res) => {
    res.send('😁Archivo agregado con éxito👏');
    console.log(req.body);
    //let user = new user ()
    user1.nomuser = req.body.nomuser;
    user1.password = req.body.password;
    user1.correo = req.body.correo; 
});

router.post('/eventos', (req, res) => {
    res.send('Archivo agregado con éxito');
    console.log(req.body);
    //let user = new user ()
    evento1.fecha = req.body.fecha;
    evento1.equipo1 = req.body.equipo1;
    evento1.equipo2 = req.body.equipo2; 
    evento1.marcador1 = req.body.marcador1;
    evento1.marcador2 = req.body.marcador2;
    evento1.tipoevento = req.body.tipoevento;
});

router.delete('/delete', (req, res) => {
    res.send('Archivo eliminado con éxito');
});

export default router;