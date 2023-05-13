


function sumar(numero1,numero2){

    
    resultado = +numero1 + +numero2;
    return resultado
}

function restar(numero1,numero2){

    
    resultado = +numero1 - +numero2;
    return resultado
}

function mostrarResultado(){
    
    let elementoNumero1 = document.getElementById("primerNumero");
    let elementoNumero2 = document.getElementById("segundoNumero");
    let elementoResultado = document.getElementById("elementoResultado");
    let elementoSuma = sumar(elementoNumero1.value,elementoNumero2.value);
    let elementoResta = restar(elementoNumero1.value,elementoNumero2.value);
    

    
    elementoResultado.textContent = "El resultado de la suma es " + elementoSuma
    elementoResultado.textContent = "El resultado de la resta es " + elementoResta


}

function restar(numero1,numero2){

    
    resultado = +numero1 - +numero2;
    return resultado
}



