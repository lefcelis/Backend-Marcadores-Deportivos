import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();


const bd_url = 'mongodb+srv://mariacamilaea:<ciclo4desarrollo>*@cluster0.36opdu7.mongodb.net/dbeventos?retryWrites=true&w=majority';
export const db =  mongoose.connect(process.env.MON_DBURI).then(()=> {
    console.log(" 😎La conexion fue realizada 🚴‍♀️ con exito a la bd:🚀 ")
}).catch((error) => console.error("Problemas al conectar a la Base de datos de Mongodb🥵",error));



export default db;