var botao = document.getElementById("botao"); 
botao.addEventListener("click", alertar); 
var nome = document.getElementById("nome");
var saida = document.getElementById("saida-de-dados"); 
var email = document.getElementById("email"); 
var tel = document.getElementById("tel");
var cep = document.getElementById("cep");
var logr = document.getElementById("logr");
var num = document.getElementById("num");
var compl = document.getElementById("compl");
var bairro = document.getElementById("bairro");
var cid = document.getElementById("cid");
var estado = document.getElementById("estado");

function alertar(event){
    //alert("Você clicou no botão!!!!!!!!!!!!!!" + event);

    const url = `http://viacep.com.br/ws/${cep.value}/json`; 
    fetch(url)
    .then(resposta=>resposta.json())
    .then(dados=>alert(dados.bairro))

    saida.innerText = "Nome:  " + nome.value + 
        "\n Email: " + email.value +
        "\n Telefone: " + tel.value +
        "\n CEP: " + cep.value +
        "\n Logradouro: " + logr.value +
        "\n Número: " + num.value +
        "\n Complemento: " + compl.value +
        "\n Bairro: " + bairro.value +
        "\n Cidade: " + cid.value +
        "\n Estado: " + estado.value;
    
}

// nome email tel cep logr num compl bairro cid estado