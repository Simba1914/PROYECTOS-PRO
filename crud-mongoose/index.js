import express, { Router } from 'express';
import cors from 'cors';
import mongoose from 'mongoose';

console.log('Este es el servidor,👇👇👇👇 conectate yaaaaaaa  ');

const server = express();
const router = Router();
const PORT = 3000;
const URL = "mongodb+srv://luisH:191406@proyecto-db.inkcl1n.mongodb.net/social"


server.use(express.json()); /*transforma el cuerpo de la peticion en json*/
server.use(cors()); /*me permite recibir solicitudesw de clientes fuera de mi dominio*/
server.use('/api/v1', router);


async function main() {
    await mongoose.connect(URL);

    // schema

    const userSchema = new mongoose.Schema({
        name: String, // String is shorthand for {type: String}
        email: { type: String, require: true },
        password:{ type: String, require: true }
    
    });

    //USER MODEL
    const user = mongoose.model('User', userSchema );

    //ROUTES
    //CRUD
    //get all users

    /*http:localhost:3000/api/v1/users*/
    router.get('/users',  async (request, response) =>{ 
        // find all documents
        const users = await user.find({});

        response.status(200).json(users);
    }); 

    //get user by id
    router.get('/users/:id', async (request, response) => {
        const id = request.params.id;
        const userFound = await user.find({_id:id}).exec();

        console.log({userFound});

    });
    

    server.listen(PORT, () => {
        console.log(`server run in http://localhost:${PORT}`);

    });
}

main();
