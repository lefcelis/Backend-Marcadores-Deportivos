import mongoose from 'mongoose';
const userShema = new mongoose.Schema({
    nomuser: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    correo: {
        type: String,
        required: true,
        unique: true,
    },
});

export const Usuario = mongoose.model('usuarios', userShema);
export default Usuario;

