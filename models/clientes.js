const {Schema, model} = require('mongoose');

const ClientesSchema = new Schema({
        nombre:{
            type:String,
            required:[true,'El Nombre es obligatorio']
        },
        edad:{
            type:Number,
            required:[true,'La Edad obligatorio']
        },
        correo:{
            type:String,
            required:[true,'El Correo es obligatorio'],
            unique:true
        },
        genero:{
            type:String,
            required:[true,'El Genero es obligatorio'],
            
        }

});

module.exports = model('Clientes',ClientesSchema);