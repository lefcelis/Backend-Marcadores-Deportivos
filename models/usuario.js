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
    }
},
{timestamps: true,
versionKey: false,});


export const usuario = mongoose.model('users', userShema);
export default usuario;

