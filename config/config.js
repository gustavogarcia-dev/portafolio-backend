import mongoose from 'mongoose';

const dbconect = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            // Elimina las opciones deprecated
        });
        console.log('Conectado a la base de datos');
    } catch (error) {
        console.error('Error al conectar a la base de datos', error);
        process.exit(1); // Salir del proceso si hay un error de conexión
    }
};

export default dbconect;
