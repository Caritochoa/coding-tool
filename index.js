const express = require('express');
const app = express();
const PORT = 3000; // Define el puerto en el que el servidor escuchará

// Ruta principal
app.get('/', (req, res) => {
    res.send('¡Hola, mundo!');
});

// Inicia el servidor
app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
