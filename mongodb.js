import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

export const db =  mongoose.connect(process.env.MON_DBURI).then(()=> {
    console.log(" 😁🙌La conexión fue realizada 👍🎉 con Éxito a la Base de Datos: 😎👏 ")
}).catch((error) => console.error("Problemas al conectar a la Base de Datos de MongoDB 😱😨",error));

export default db;