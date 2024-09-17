import express from 'express';
import ProyectoModel from '../../models/projectModel.js'; // Ajusta la ruta según tu estructura
import dbconect from '../../config/config.js';

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        await dbconect(); // Conectar a la base de datos
        const proyectos = await ProyectoModel.find(); // Obtener todos los proyectos
        res.status(200).json(proyectos); // Responder con los proyectos
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener los proyectos', error });
    }
});

export default router;
