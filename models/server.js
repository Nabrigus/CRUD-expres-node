const express = require('express');
const {DBconnection} = require('../database/ConectionDb');

class server{
    constructor(){
        this.app = express();
        this.url = '/app/url';
        this.port = process.env.PORT;

        //CONECTARDB
        this.ConectarDB();

        //MIDDLEWARE
        this.middleware();
        
        //RUTAS
        this.routes();
    }
   async ConectarDB(){
        await DBconnection();
    }
    middleware(){

        this.app.use( express.json() );
        this.app.use( express.static('public') );
        this.app.use( express.urlencoded({extended:false}) );
        


        
    }
    
    routes(){
        this.app.use( this.url,require('../routes/rutas') );
        
    }

    listen(){
        this.app.listen(this.port,()=>{
            console.log(`Server conectado al puerto: ${this.port}`);
        });

    }
}

module.exports = server;