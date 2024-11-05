const express = require('express');
const path = require('path');
const app = express();
const pokeneaRoutes = require('./routes/pokeneaRoutes');
 

// Configuración de EJS como motor de plantillas
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Configuración de rutas
app.use('/pokenea', pokeneaRoutes);

// Ruta de bienvenida
app.get('/', (req, res) => {
  res.render('index'); // Renderiza la vista 'index.ejs'
});

// Puerto de escucha
const port = process.env.PORT || 80;
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
