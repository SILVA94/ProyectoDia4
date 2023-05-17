
function mostrarResultado(resultado){
    document.getElementById("resultado").value = resultado
}

function sumar(){

    let numero1 = +document.getElementById("primerNumero").value
    let numero2 = +document.getElementById("segundoNumero").value
    mostrarResultado(numero1 + numero2)
}

function restar(){

    let numero1 = +document.getElementById("primerNumero").value
    let numero2 = +document.getElementById("segundoNumero").value
    mostrarResultado(numero1 - numero2)
}

function multiplicar(){

    let numero1 = +document.getElementById("primerNumero").value
    let numero2 = +document.getElementById("segundoNumero").value
    mostrarResultado(numero1 * numero2)
}

function dividir(){

    let numero1 = +document.getElementById("primerNumero").value
    let numero2 = +document.getElementById("segundoNumero").value
    mostrarResultado(numero1 / numero2)
}

function potenciar(){
    let numero1 = +document.getElementById("primerNumero").value
    let numero2 = +document.getElementById("segundoNumero").value
    mostrarResultado(Math.pow(numero1, numero2))
}

function raiz(){
    let numero1 = document.getElementById("primerNumero").value
    mostrarResultado(Math.sqrt(numero1))
}

function absoluto(){
    let numero1 = document.getElementById("primerNumero").value
    mostrarResultado(Math.abs(numero1))
}

function random(){
    let maximo = +document.getElementById("primerNumero").value
    let minimo = +document.getElementById("segundoNumero").value
    maximo = maximo + 1
    mostrarResultado(Math.floor(Math.random()*(maximo-minimo+1)+minimo))
}

function round(){
    let resultado = document.getElementById("resultado").value
    mostrarResultado(Math.round(resultado))
}

function ceil(){
    let resultado = document.getElementById("resultado").value
    mostrarResultado(Math.ceil(resultado))
}

function floor(){
    let resultado = document.getElementById("resultado").value
    mostrarResultado(Math.floor(resultado))
}
