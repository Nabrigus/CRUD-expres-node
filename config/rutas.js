const {response} = require('express');

const Clientes = require('../models/clientes');

// METHOS GET

const ClientGet    = (req,res = response)=>
{
     const {buscar} = req.query;

     Clientes.findOne({correo: buscar},  (err, item) => {
           
          //En caso de error
          if (err) return console.error(err);
          
          //Desestructurar datos para manipular
          const {nombre,correo,id,genero,edad} = item;
           
           //html 
           pagina = `<h1>Dato Buscado: ${buscar}</h1> <br><p>Nombre : ${nombre}
           <br><p>E-mail: ${correo}<br><p>Genero: ${genero}<br><p>Edad: ${edad}<br><p>Id: ${id}`;
           
           //respuesta final
           res.send(pagina);
     })






}     


// METHOS POST

const ClientPost   = async(req  ,res = response)=>
{
     const {nombre,edad,correo,genero} = req.body;

     let clientes = new Clientes({nombre,edad,correo,genero});

     pagina = `<h1>Datos del Registro</h1><br><p>Nombre: ${nombre}</p><br><p>Edad: ${edad}</p>
     <br><p>correo: ${correo}</p><br><p>Genero: ${genero}</p>`;

     //Guardar en db
     await clientes.save();
     res.send(pagina);

} 

const ClientesActualizar = async(req,res = response)=>{

     const {buscarACT,nombreACT,edadACT,generoACT} = req.body;
     
     pagina = `<h1>Datos Actualizados de: </h1><p>${buscarACT}</p><br><p>Nombre Nuevo: ${nombreACT}</p>
               <br><p>Edad Nueva: ${edadACT}</p> <br><p>Genero Nuevo: ${generoACT}</p>`
     
     await Clientes.updateOne({correo:buscarACT,edad:edadACT,genero:generoACT,nombre:nombreACT});
     
     res.send ( pagina );

         
}
// METHOD PUT
const  ClientPut    = (req,res = response)=>
{
    req.json({msg:'Pacht - api'})

}   
const ClientPacht  = (req,res = response)=>{res.json( {msg:'Pacht - api'} ) } 


const ClientDelete = async(req,res = response)=>{

     const {buscarDel} = req.body;
    await Clientes.deleteOne({correo:buscarDel});
     pagina = `<h3>Se ha eliminado el cliente con el e-mail:</h3>${buscarDel}`
     res.send(pagina);
 }




module.exports = { 
    ClientGet,    
    ClientPost,   
    ClientPut,    
    ClientPacht,  
    ClientDelete,
    ClientesActualizar }