import express from 'express';
import projects from './api/routes/projects.js';
import newProjectRoutes from './api/routes/new-project.js';
import projectDeleteRoutes from './api/routes/project-delete.js';
import dotenv from 'dotenv';


dotenv.config();

const app = express();


// Middleware to parse JSON requests
app.use(express.json());

// Configuración específica para producción
if (process.env.NODE_ENV === 'production') {
    app.set('env', 'production');
    // Agrega aquí otras configuraciones específicas para producción si es necesario
}

// Configura las rutas
app.use('/api/projects', projects);
app.use('/api/new-project', newProjectRoutes);
app.use('/api/project-delete/', projectDeleteRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
