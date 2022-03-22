const {Router} = require('express');
const rutas = Router();

const {    ClientGet,ClientPost,ClientPut,ClientPacht, ClientDelete,ClientesActualizar } = require('../config/rutas');

rutas.get('/Buscar'   , ClientGet);
rutas.post('/Crear'  , ClientPost);
rutas.post('/Actualizar', ClientesActualizar);
rutas.post('/Eliminar',ClientDelete);

//Sin uso de momento
rutas.put('/'   , ClientPut);
rutas.patch('/' , ClientPacht);
rutas.delete('/', ClientDelete);


module.exports = rutas;