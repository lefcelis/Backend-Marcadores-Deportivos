import {evento} from '../models/evento.js';

//Guardar o registrar un evento deportivo

export const regevento = (req, res) => {
    const cevento = evento(req.body);
    cevento
      .save()
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }));
  };

//Mostrar los eventos deportivos que están en la bd de MongoDB

export const showevento = (req,res) => {
    evento
     .find()
     .then((data)=> res.json(data))
     .catch((error)=> res.json({message:error})); 
 }


// Mostrar un evento deportivo específico

export const showoneevento = (req, res) => {
    const { id } = req.params;
    evento
      .findById(id)
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }));
  };


//Eliminar un evento deportivo

export const deleteevento =  (req, res) => {
    const { id } = req.params;
    evento
      .deleteOne({ _id: id })
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }));
  };


//Actualizar un evento deportivo
export const updateevento =  (req, res) => {
    const { id } = req.params;
    const { fecha , equipo1, equipo2, marcador1, marcador2, tipoevento } = req.body;
    evento
      .updateOne({ _id: id }, { $set: { fecha , equipo1, equipo2, marcador1, marcador2, tipoevento } })
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }));
  };

export default regevento; 