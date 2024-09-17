import express from 'express';
import bodyParser from 'body-parser';
import projects from './api/routes/projects.js';
import newProjectRoutes from './api/routes/new-project.js';
import projectDeleteRoutes from './api/routes/project-delete.js';
import dotenv from 'dotenv';



const app = express();
dotenv.config();
// Middleware to parse JSON requests
app.use(express.json());
app.use(bodyParser.json());

// Configura las rutas
app.use('/api/projects', projects);
app.use('/api/new-project', newProjectRoutes);
app.use('/api/project-delete/', projectDeleteRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
