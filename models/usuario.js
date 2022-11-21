import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
const userSchema = new mongoose.Schema({
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

userSchema.pre('save', function(next) {
    const user = this
    const salt = bcrypt.genSaltSync(12);
    const hash = bcrypt.hashSync(user.password, salt);
    user.password = hash;
    next()
    });

export const usuario = mongoose.model('users', userSchema);
export default usuario;

