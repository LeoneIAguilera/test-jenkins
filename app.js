const express = require('express');
const redis = require('redis');
const app = express();
const client = redis.createClient({ host: 'redis' });

// Middleware para servir archivos estáticos
app.use(express.static('views'));

// Ruta principal
app.get('/', (req, res) => {
    client.incr('visitas', (err, visitas) => {
        if (err) visitas = 'Error al contar visitas';
        res.send(`
            <h1>¡Hola desde Node.js + Jenkins!</h1>
            <p>Visitas: ${visitas}</p>
            <p>Este es un proyecto de prueba para aprender CI/CD.</p>
        `);
    });
});

// Iniciar servidor
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});