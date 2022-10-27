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
        img = document.getElementById("a").src="https://static.jojowiki.com/images/6/69/latest/20201130220440/Jotaro_SC_Infobox_Manga.png";
        console.log(img)
    }else if(imagen2 == 2){
        img = document.getElementById("a").src="https://static.jojowiki.com/images/thumb/4/4a/latest/20210422070411/Giorno_Giovanna_Infobox_Anime.png/400px-Giorno_Giovanna_Infobox_Anime.png";
    }else if(imagen2 == 3){
        img = document.getElementById("a").src="https://static.jojowiki.com/images/thumb/2/20/latest/20200923041552/Jolyne_Infobox_Manga.png/400px-Jolyne_Infobox_Manga.png";
    }else if(imagen2 == 4){
        img = document.getElementById("a").src="https://gamebanana.com/mods/embeddables/393858?variant=sd_image";
    }else if(imagen2 == 5){
        img = document.getElementById("a").src="https://external-preview.redd.it/SfLeRKoLZ9W9WynNaOQeOili8KyGk2RKsXEou0I2pHA.jpg?auto=webp&s=9b773964ee5aefbb35a5688cb31d7bcf246eed8f";
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
