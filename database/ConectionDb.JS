const mongoose = require('mongoose');


const DBconnection = async()=>{
    try{
        await mongoose.connect(process.env.MONGODB_CNN);
        console.log(`Base de datos online: USER: ${process.env.USER}`);    
    }catch(error){
        console.log(error);
        throw new Error('Ha Ocurrido un error al conectar a la DB');
    }
}


module.exports = {DBconnection}