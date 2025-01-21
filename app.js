// Array para armazenar os nomes dos amigos
let amigos = [];

// Função para adicionar um amigo à lista
function adicionarAmigo() {
    const campoDeEntrada = document.getElementById('amigo');
    const nomeAmigo = campoDeEntrada.value.trim();

    if (nomeAmigo !== "") {
        amigos.push(nomeAmigo);
        atualizarLista();
        campoDeEntrada.value = ""; // Limpa o campo de entrada
    } else {
        alert("Por favor, digite um nome.");
    }
}

// Função para atualizar e exibir a lista de amigos
function atualizarLista() {
    const listaAmigosUl = document.getElementById('listaAmigos');
    listaAmigosUl.innerHTML = ""; // Limpa o conteúdo anterior da lista
    
    for (let i = 0; i < amigos.length; i++) {
        const li = document.createElement('li');
        li.textContent = amigos[i];
        listaAmigosUl.appendChild(li);
    }
}

// Função para sortear amigos em círculo e mostrar apenas o sorteio do usuário atual
function sortearAmigo() {
    // Verifica se há amigos suficientes para realizar o sorteio
    if (amigos.length < 2) {
        alert("Por favor, adicione pelo menos 2 amigos à lista antes de sortear.");
        return;
    }

    // Esconde a lista de nomes para garantir a surpresa
    document.getElementById('listaAmigos').style.display = 'none';
    document.getElementById('amigo').style.display = 'none';
    document.querySelector('.button-add').style.display = 'none';

    // Copia o array de amigos para sortear sem alterar o original
    let amigosRestantes = [...amigos];
    let sorteados = [];

    // Gera o sorteio em círculo
    while (amigosRestantes.length > 0) {
        const indiceAleatorio = Math.floor(Math.random() * amigosRestantes.length);
        const amigoSorteado = amigosRestantes.splice(indiceAleatorio, 1)[0];
        sorteados.push(amigoSorteado);
    }

    // Adiciona o primeiro sorteado ao final da lista para fechar o círculo
    sorteados.push(sorteados[0]);

    // Exibe o timer
    const timerElement = document.createElement('div');
    timerElement.id = 'timer';
    document.body.appendChild(timerElement);

    // Função para exibir o sorteio de cada participante com atraso
    let indiceAtual = 0;

    function exibirSorteio() {
        if (indiceAtual < sorteados.length - 1) {
            const resultado = document.getElementById('resultado');
            resultado.innerHTML = `${sorteados[indiceAtual]} sorteou ${sorteados[indiceAtual + 1]}`;

            // Atualiza o timer
            let timer = 3;
            const countdown = setInterval(() => {
                timerElement.innerHTML = `Próximo sorteio em: ${timer} segundos`;
                timer--;
                if (timer < 0) {
                    clearInterval(countdown);
                    indiceAtual++;
                    exibirSorteio();
                }
            }, 1000); // Atualiza o timer a cada segundo

        } else {
            const resultado = document.getElementById('resultado');
            resultado.innerHTML = "Todos os sorteios foram realizados!";
            document.body.removeChild(timerElement); // Remove o timer quando o sorteio termina
        }
    }

    // Inicia a exibição do sorteio
    exibirSorteio();
}
