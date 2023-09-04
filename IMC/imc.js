
// inicializar variables con las cajas que necesito, tomo una variable y asigno un elemento
const calcular = document.getElementById('calcular');

function imc() {
    const Nombre = document.getElementById('name').value;
    const Apellido = document.getElementById('lastname').value;    
    const altura = +document.getElementById('altura').value;
    const peso = +document.getElementById('peso').value;
    const resultado = document.getElementById('resultado');


// le decimos que debe hacer en la function,

    if (Nombre !=='' &&  Apellido !=='' && altura !== '' && peso !== '') {

// el valor de la formula siempre va a ser constante
        const valorIMC = (peso / (altura * altura)).toFixed(1);
        
// la clasificaion siempre va a variar debido a que es un dato dado por el usuario
        let Clasificacion = '';
// if para decirle que si es asi haga tal funcion
        if (valorIMC < 18.5) {
            Clasificacion = 'Estas bajo de peso.';
// else if para indicarle que si no es asi, haga tal cosa            
        } else if (valorIMC < 25) {
            Clasificacion = ' Estas Con el peso ideal,felicitaciones!!!';
        } else if (valorIMC < 30) {
            Clasificacion = 'Tienes un poco de sobrepeso.';
        } else if (valorIMC < 35) {
            Clasificacion = 'Estas en obesidad grado 1.';
        } else if (valorIMC < 40) {
            Clasificacion = ' Estas en obesidad grado 2';
        } else {
            Clasificacion = 'Obesidad grado 3, pareces un panda, cuidado!!';
        }
// con esto le decimos que debe imprimir
        resultado.textContent = `${Nombre} ${Apellido} tu IMC es ${valorIMC} y ${Clasificacion}`;
// y una alerta por si el usuario omite algun dato dejando asi campos obligatorios
    } else {
        resultado.textContent = 'Rellena todos los campos !!!';
    }

}
//  calcular que me permita que cuando de click haga la funcion imc
calcular.addEventListener('click', imc);

