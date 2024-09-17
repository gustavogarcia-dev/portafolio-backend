import mongoose from 'mongoose';

const ProyectoSchema = new mongoose.Schema({
    nombre: { type: String, required: true },
    tecnologias:{type: [String], required:true},
    descripcion: { type: String, required: true },
    url_proyecto: {type: String, required:true},
    fecha: { type: String, },
    imagen: { type: String }, // Puedes almacenar la URL de la imagen
});

export default mongoose.models.Proyecto || mongoose.model('Proyecto', ProyectoSchema, 'proyectos');

