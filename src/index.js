const express = require('express');
const app = express();

// Conf
app.set('port', process.env.PORT || 3000);

// Middlewares
app.use(express.json());

// Rutas
app.use(require('./routes/person'));

// Iniciando el servidor
app.listen(app.get('port'), () => {
    console.log('Server activo en el puerto: ', app.get('port'));
});