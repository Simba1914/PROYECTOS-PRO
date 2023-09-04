function sum(a,b){
    return a+b
}

function subtract(a,b){
    return a-b
}

function multiply(a,b){
    return a*b
}


function divide(a,b){
    if(b===0){
            console.log('no se puede dividir entre cero aprenda')
    }else {
        return a/b
    }
}


exports.sum=sum
exports.subtract=subtract
exports.multiply=multiply
exports.divide=divide

