/* Creacion de una funcion */

function divisores(numero){
    let total = 0;
    
    for(let n = 0;n<numero;n++){
        if(numero% n == 0){
            total++;
        }
    }
    return total;

}


const divisoresV2 = function(numero){
    let total = 0;
    
    for(let n = 0;n<numero;n++){
        if(numero% n == 0){
            total++;
        }
    }
    return total;
}

const divisoresV3 = numero => {
    let total = 0;
    for(let n = 0;n<numero;n++){
        if(numero% n == 0){
            total++;
        }
    }
    return total;
};

function calcular(){
    let numero = parseInt(document.getElementById("num").value);
    let resultado = document.getElementById("resul");

    resultado.value = divisores(numero)
        
}

console.log(divisoresV2(13));
console.log(divisoresV3(40))



/* console.log(function divisores(numero){
    let total = 0;
    
    for(let n = 0;n<numero;n++){
        if(numero% n == 0){
            total++;
        }
    }
    return total;

}) */