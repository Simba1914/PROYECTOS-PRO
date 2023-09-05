
// importo express
import express from 'express';
import mongoose from 'mongoose';

//creo una instancia
const server = express();
const PORT = 3000;

// indicar a l servidor que utilice json en las peticiones
server.use(express.json());


// conexion a base de datos
async function main(){
    //capturar errores

    try {
        await mongoose.connect('mongodb+srv://luisH:191406@proyecto-db.inkcl1n.mongodb.net/')
        
        // levantate y ponte en el siguiente puerto
        // callback es una funcion que recibe como parametro otra funcion, cuando te termines dfe levantar muestra lo siguiente
        server.listen(PORT, () => {
            console.log(`server up in http://localhost:${PORT}`);
        
        });
        
    } catch (error) {
        console.error('ERROR:', error.message);
        
    }

}


main();
