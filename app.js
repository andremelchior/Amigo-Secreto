let amigos = [];

function adicionarAmigo(){
    let nome = document.querySelector('#amigo');
    if(nome.value != ""){
        amigos.push(nome.value);
        nome.value = '';
        for (let i = 0; i < amigos.length; i++) {
            alert(amigos[i]);   
        }
    } else {
        alert("Por favor, insira um nome.");
    }

}