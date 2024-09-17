import express from 'express';
import ProyectoModel from '../../models/projectModel.js'; // Ajusta la ruta según tu estructura
import dbconect from '../../config/config.js';

const router = express.Router();

router.post('/', async (req, res) => {
    try {
        await dbconect(); // Conectar a la base de datos
        const body = req.body;
        const nuevoProyecto = await ProyectoModel.create(body);
        res.status(201).json(nuevoProyecto); // Responder con el nuevo proyecto
    } catch (error) {
        res.status(500).json({ message: 'Error al crear el proyecto', error });
    }
});

export default router;
