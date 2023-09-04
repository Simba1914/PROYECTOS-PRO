// const fs =require('fs');

// fs.writeFile('./test1.txt', 'linea de codigo no 1' , function(error){
//     if(error){
//         console.log(error)
//     }else{
//         console.log('archivo creado');
//     }
// })

// console.log('ultimalinea de codigo')


// funciones flechas

// const fs =require('fs/promises');

// fs.writeFile('./test1.txt', 'linea de codigo no 1') 
//     .then(() => {console.log('archivo creado')})
//     .catch((error) => {console.log(error)})
    

// console.log('ultima linea de codigo')

// const fs =require('fs/promises');

fs.readFile('./test1.txt', (error, datos) => {
    if(error) {
        console.log(error);
    } else {
        console.log(satos.toString());
    }
}) 
    




// fs.writeFile('./test1.txt', 'linea de codigo no 1') 
//     .then(consol.log('archivo creado'))
//     .catch(consol.log(error))
//     if(error){
//         console.log(error)
//     }else{
//         console.log('archivo creado');
//     }


// console.log('ultimalinea de codigo')