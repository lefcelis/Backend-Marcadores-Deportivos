import mongoose from 'mongoose';
const eventoShema = new mongoose.Schema({
    fecha: {
        type: Date,
        required: true,
    },
    equipo1: {
        type: String,
        required: true,
    },
    equipo2: {
        type: String,
        required: true,
    },
    marcador1: {
        type: Number,
    },
    marcador2: {
        type: Number,
    },
    tipoevento: {
        type: String,
        required: true,
    }
},
{timestamps: true,
    versionKey: false,});

export const evento = mongoose.model('ceventos', eventoShema);
export default evento;