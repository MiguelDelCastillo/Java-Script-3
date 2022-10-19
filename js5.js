function calcular(){
    let numero1 = parseInt(document.getElementById("num1").value);
    let numero2 = parseInt(document.getElementById("num2").value);
    let operacion = document.getElementById("operacion").value; 
    let resultado = document.getElementById("resultado");

    if(operacion == '+'){
        resultado.value = numero1+numero2;
    }else if(operacion == "-"){
        resultado.value = numero1-numero2;
    }else if(operacion == "/"){
        resultado.value = numero1/numero2;
    }else if(operacion == "*"){
        resultado.value = numero1*numero2;
    }

}

function imagen(){
    imagen2 = parseInt(document.getElementById("imagenACambiar").value);
    img = document.getElementById("a").src="asdasd";
    if(imagen2 == 1){
        img = document.getElementById("a").src="/recursos/jotaro.png";
        console.log(img)
    }else if(imagen2 == 2){
        img = document.getElementById("a").src="/recursos/giorno.jpg";
    }else if(imagen2 == 3){
        img = document.getElementById("a").src="/recursos/jolyne.jpg";
    }else if(imagen2 == 4){
        img = document.getElementById("a").src="/recursos/joseph.jpg";
    }else if(imagen2 == 5){
        img = document.getElementById("a").src="/recursos/stroheim.png";
    }

}

function tablaMultiplicar(){
    let tabla = parseInt(document.getElementById("tabla").value)
    let d = document.getElementById("tabla2")
    let almacen="";
    let lista = []
    d.innerText = "";
    console.log(d.textContent)
    for(let p = 1;p<=10;p++){
        almacen = `${p} * ${tabla} = ${p*tabla}`;
        lista.push(almacen)
    }
    console.log(lista)
    for (let p = 0; p<lista.length;p++){
        d.innerHTML = d.innerHTML + lista[p]
        d.innerHTML = d.innerHTML + "</br>"
    }
}
