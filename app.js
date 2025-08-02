let amigos = [];
let sorteados = [];

function adicionarAmigo() {
    const input = document.getElementById("amigo");
    let nome = input.value.trim();

    if (nome === "") {
        alert("Por favor, insira um nome de amigo na caixa!");
        return;
    }

    amigos.push(nome);
    atualizarlista();
    input.value = "";
}

function atualizarlista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    amigos.forEach((amigo, index) => {
        const li = document.createElement("li");
        li.textContent = amigo + (index < amigos.length - 1 ? "," : "");
        lista.appendChild(li);
    });
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Você precisa adicionar pelo menos dois amigo!");
        return;
    }

    let indiceSorteado = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceSorteado];
    
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `O seu amigo sorteado é: ${amigoSorteado}`;
}

function reiniciar() {
    amigos = [];
    document.getElementById("listaAmigos").innerHTML = "";
    document.getElementById("resultado").innerHTML = "";

}