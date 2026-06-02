import express from 'express';
import cors from 'cors';
import categoriaRoutes from './routes/categoriaRoutes.js';

const app = express();
const PORT = 3001;

app.use(cors());          
app.use(express.json());  

// Ruta base
app.use('/categorias', categoriaRoutes);

app.listen(PORT, () => {
    console.log(`Servidor en http://localhost:${PORT}`);
});