/* Programa Elaborado por Miguel del Castillo 
    Ninguna copia esta autorizada*/

/* let numero = 1; */
/* let numeronuevo = [1,2,3] */

/* for(i = 0;i<numero;i++){
    if(numero%i == 0){
        console.log(i)
        numeroAlm = numeroAlm+i;
    }
}
if(numeroAlm==numero){
    console.log("Es perfecto")
}else{
    console.log("No es perfecto")
} */

/* Programa Numeros perfectos */

let numeroAlm = 0;
let cantidad = 4;
let b = 0;
let n = 6;

/* Especificacion de variables
    numeroAlm : numero de Almacenamiento
    cantidad : Cantidad de numeros a pedir
    b : valor necesario del ciclo while
    n: numero con el que empieza el ciclo

*/

while(b<cantidad){
    numeroAlm=0;
    for(i = 0;i<n;i++){
        if(n%i == 0){
            numeroAlm = numeroAlm+i;
        }
    }
    
    if(numeroAlm == n){
        console.log("Es perfecto")
        console.log(n)
        i =0;
        b++;
    }
    n++;
    
}

let horaInicial =1;
let frecuencia = 12;
p=1;

/* if(horaInicial ==23){
    console.log(`Dosis ${p} tomar a las ${horaInicial}`)
    p++;
    horaInicial = frecuencia-1;
} */

let cantidadDosis = 0;
cantidadDosis = Math.floor(24/frecuencia);

for(a = 1;a<=cantidadDosis;a++){
    if(horaInicial>23){
        horaInicial = horaInicial-24
    }
    console.log(`Su dosis ${a}: ${horaInicial}`)
    horaInicial = horaInicial+frecuencia
}

/* while(horaInicial < 24){
    console.log(`Dosis ${p} tomar a las ${horaInicial}`)    
    p++;
    horaInicial=horaInicial+frecuencia;
} */

let horaInicial =22;
let frecuencia = 5;
let cantidadDosis = 0;

cantidadDosis = Math.floor(24/frecuencia);

console.log(`Cada ${frecuencia} horas, debe tomar su medicamento 
            \n Su hora inicia a las ${horaInicial}`)

for(a = 1;a<=cantidadDosis;a++){
    if(horaInicial>23){
        horaInicial = horaInicial-24
    }
    console.log(`Dosis ${a}: ${horaInicial}`)
    horaInicial = horaInicial+frecuencia
}
