let formulario = document.querySelector("form");

formulario.addEventListener("submit", function(evento) {
    evento.preventDefault();

    let campoNome = document.getElementById("nome");
    let campoData = document.getElementById("dataNasc");
    let campoCpf = document.getElementById("cpf");
    let campoProfissao = document.getElementById("profissao");

    if (campoNome.value === "") {
        alert("Por favor, preencha o seu nome.");
    } 
    else if (campoData.value === "") {
        alert("Por favor, preencha a sua data de nascimento.");
    } 
    else if (campoCpf.value === "") {
        alert("Por favor, preencha o seu CPF.");
    } 
    else if (campoProfissao.value === "") {
        alert("Por favor, informe a sua profissão.");
    } 
    else {
        alert("Tudo certo! Cadastro realizado com sucesso.");
        formulario.reset();
    }
});