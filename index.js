import express from 'express';
import cors from 'cors';

//import blogRoutes from './routes/blogRoutes.js';

const app = express();
app.use(cors());
app.use(express.json());
//app.use('/usuarios', blogRoutes);

app.get('/', (req, res) => {
    res.send('🐱‍💻✔😃¡HOLA MUNDO - MISIÓN TIC 2022!😁🙌😎');
});

app.listen(8000, () => console.log('Servidor corriendo en http://localhost:8000'));

