let textInput = document.querySelector("#input__texto");
let outInput = document.querySelector("#output");


function criptografar(){

    let texto = textInput.value;

    let resultCripto = texto.replace(/e/g, "enter").replace(/i/g, "imes").replace(/a/g, "ai").replace(/o/g, "ober").replace(/u/g, "ufat")

  
  document.getElementById('output').innerHTML = '<textarea readonly id="input__texto">' + resultCripto + 
  '</textarea>' + '<button class="button__copiar" id="copiar" onclick="copiar()">Copiar</button>'
}

function descriptografar(){

    let texto = textInput.value;

    let resultDescripto = texto.replace(/enter/g, "e").replace(/imes/g, "i").replace(/ai/g, "a").replace(/ober/g, "o").replace(/ufat/g, "u");
  
    document.getElementById('output').innerHTML = '<textarea readonly id="input__texto">' + resultDescripto + 
    '</textarea>' + '<button class="button__copiar" id="copiar" onclick="copiar()">Copiar</button>'
}

function copiar() {
    let copyText = document.getElementById('input__texto');
  
    copyText.select();
    document.execCommand('copy');
    alert("Texto copiado.");
}  