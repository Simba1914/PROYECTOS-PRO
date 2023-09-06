import express  from 'express';
import cors from 'cors';
import mongoose from 'mongoose';

console.log('Este es el servidor,👇👇👇👇 conectate yaaaaaaa  ');

const server = express();
const PORT = 3000;


server.use(express.json()); /*transforma el cuerpo de la peticion en json*/
server.use(cors()); /*me permite recibir solicitudesw de clientes fuera de mi dominio*/


async function main(){
    await mongoose.connect("mongodb+srv://luisH:191406@proyecto-db.inkcl1n.mongodb.net/social");

    server.listen(PORT, () => {
        console.log(`server run in http://localhost:${PORT}`);

});
}

main();
