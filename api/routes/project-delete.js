import express from 'express';
import ProyectoModel from '../../models/projectModel.js'; // Ajusta la ruta según tu estructura
import dbconect from '../../config/config.js';

const router = express.Router();

router.delete('/:id', async (req, res) => {
    try {
        await dbconect(); // Conectar a la base de datos
        const { id } = req.params;
        const resultado = await ProyectoModel.findByIdAndDelete(id); // Eliminar el proyecto
        if (!resultado) {
            return res.status(404).json({ message: 'Proyecto no encontrado' });
        }
        res.status(200).json({ message: 'Proyecto eliminado' }); // Confirmar eliminación
    } catch (error) {
        res.status(500).json({ message: 'Error al eliminar el proyecto', error });
    }
});

export default router;
