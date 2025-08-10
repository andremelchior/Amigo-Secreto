let amigos = [];
let quantidadeAmigos;

function adicionarAmigo(){
    let nome = document.querySelector('#amigo');
    if(nome.value != ""){
        amigos.push(nome.value);
        nome.value = '';
        listarAmigo();
    } else {
        alert("Por favor, insira um nome.");
    }

}

function listarAmigo(){
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    for (let i = 0; i < amigos.length; i++) {
        lista.innerHTML += `<li>${amigos[i]}</li>`;
    }
}