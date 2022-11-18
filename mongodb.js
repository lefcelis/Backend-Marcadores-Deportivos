import mongoose from 'mongoose';

const bd_url = 'mongodb+srv://leynikercelis:Biologist13.@cluster0.lgvrm3d.mongodb.net/dbeventos?retryWrites=true&w=majority';

export const db = await mongoose.connect(bd_url);
console.log('La conexión fue realizada con éxito a la bd 😎🙌', db.connection.name);

export default db;