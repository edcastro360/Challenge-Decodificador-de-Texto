const input = document.getElementById('inputdetexto');
const buttonCriptografar = document.getElementById('buttonCriptografar');
const buttonDescriptografar = document.getElementById('buttonDescriptografar');


const sorteio = {
    "a" : "ai", //Requisito Projeto
    "b" : "kfva",
    "c" : "cagw",
    "d" : "tbfq",
    "e" : "enter",//Requisito Projeto
    "f" : "hafe",
    "g" : "jyui",
    "h" : "lohy",
    "i" : "imes", //Requisito Projeto
    "j" : "fafa",
    "k" : "bgae",
    "l" : "hacf",
    "m" : "yekn",
    "n" : "qyrc",
    "o" : "ober",//Requisito Projeto
    "p" : "hilo",
    "q" : "cawg",
    "r" : "hqpi",
    "s" : "azqr",
    "t" : "abhy",
    "u" : "ufat",//Requisito Projeto
    "v" : "farg",
    "w" : "cayh",
    "x" : "nhuo",
    "y" : "qagt",
    "z" : "byuo",
}

let resultadoTexto;

function mostrar(texto) { 
    while ((document.getElementById('areaTexto')).firstChild) {
        (document.getElementById('areaTexto')).removeChild((document.getElementById('areaTexto')).firstChild);
    }
    const filho = document.createElement("p");
    filho.innerText = texto;
    (document.getElementById('areaTexto')).appendChild(filho);
    console.log(document.getElementById('areaTexto'));
}

function verificar(func) {  
    if (/^[a-z ]+$/g.test(resultadoTexto)){
        func();
    } else {
        alert("Apenas letras minúsculas e sem acento");
    }
}


function criptografar() {
    let textoCriptografado = "";
    for (let index = 0; index < resultadoTexto.length; index++) {
        if(" " != resultadoTexto[index]) {
            textoCriptografado += sorteio[resultadoTexto[index]];
        } else {
            textoCriptografado += " ";
        }
    }
    mostrar(textoCriptografado);
}

function descriptografar() {
    const arrayVar = resultadoTexto.split(" ");
    let varDescriptografia = "";

    for (let index = 0; index < arrayVar.length; index++) {
        let palavra = "";
        for (let i = 0; i < arrayVar[index].length; i+=4) {

            if (arrayVar[index][i]=="a") {
                palavra += "a";
                i -= 2;
            }
            else if (arrayVar[index][i]=="e") {
                palavra += "e";
                i ++;
            }
            else {
                const indexLetra = Object.values(sorteio).indexOf(arrayVar[index].substr(i, 4));
                palavra += Object.keys(sorteio)[indexLetra];
            }        
        }
        if (index > 0) {
            varDescriptografia += " ";
        }
        varDescriptografia += palavra;
    }
    mostrar(varDescriptografia);
}

input.addEventListener("change", (e) => {resultadoTexto = e.target.value});
buttonCriptografar.onclick = () => {verificar(criptografar)};
buttonDescriptografar.onclick = () => {verificar(descriptografar)};