import bcrypt from 'bcrypt';
import usuario from '../models/usuario.js';


module.exports = (req,res) =>{
    const { nomuser,password } = req.body
    
    
    User.findOne({nomuser: nomuser},function(error,usuario){        
        if(usuario){
            bcrypt.compare(password, usuario.password, (error,same)=>{
                if(same){
                    req.session.userId = user._id
                    res.redirect('/')
                }
                else{
                    res.redirect('/auth/login')
                }
            })
        }
        else{
            console.log("/auth/login::",usuario)
            res.redirect('/auth/login')
        }
    })
}