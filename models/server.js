const express = require('express');
const { dbConecction } = require('../database/config');

class Server {

    constructor() {
        this.app = express();
        this.usuariosPath = '/';
        this.app.set('port', process.env.PORT || 3000);

        //Middlewares.
        this.middlewares();

        //Rutas de mi aplicacion.
        this.routes();

        this.conectarDB()
    };

    middlewares() {
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: false }));
    }

    routes() {
        this.app.use(this.usuariosPath, require('../routes/node.routes'));
    };

    async conectarDB(){
        await dbConecction();
    };

    listen() {
        this.app.listen(this.app.get('port'), () => {
            console.log('Servidor corriendo en el puerto', this.app.get('port'));
        });
    };

};

module.exports = Server;