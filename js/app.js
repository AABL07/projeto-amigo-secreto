let amigos = [];

function formatarNome(nome) {
    if (!nome) {
        return ""; // Retorna string vazia se o nome for nulo ou indefinido
    }
    nome = nome.trim().toLowerCase(); // Remove espaços e converte para minúsculas
    return nome.charAt(0).toUpperCase() + nome.slice(1); // Primeira letra maiúscula + restante minúsculo
}


function adicionar() {


    let amigo = document.getElementById('nome-amigo');
    let nomeAmigo = formatarNome(amigo.value);
    if (nomeAmigo == '') {
        alert('Informe o nome do amigo!');
        return;
    }

    if (amigos.includes(amigo.value)) {
        alert('Nome já existe!');
        return;
    }
    let lista = document.getElementById('lista-amigos');
    
    
    amigos.push(nomeAmigo);


    if (lista.textContent == '') {
        lista.textContent = nomeAmigo;
    } else {
        lista.textContent = lista.textContent + ', ' + nomeAmigo;
    }   


    amigo.value = '';
    
    
    atualizarLista();
    atualizarSorteio();
}


function sortear() {
    if (amigos.length < 4) {
        alert('Adicione pelo menos 4 amigos!');
        return;
    }
    embaralhar(amigos);
    let sorteio = document.getElementById('lista-sorteio');
    for (let i = 0; i < amigos.length; i++) {
        if (i == amigos.length - 1) {
            sorteio.innerHTML = sorteio.innerHTML + amigos[i] +' --> ' + amigos[0] + '<br>';
        } else {
            sorteio.innerHTML = sorteio.innerHTML + amigos[i] +' --> ' + amigos[i + 1] + '<br>';
        }
        
    }

}


function excluirAmigo(index) {
    amigos.splice(index, 1);
    atualizarLista();
    atualizarSorteio();
}

function embaralhar(lista) {
    for (let indice = lista.length; indice; indice--) {
        const indiceAleatorio = Math.floor(Math.random() * indice);
        [lista[indice - 1], lista[indiceAleatorio]] = [lista[indiceAleatorio], lista[indice - 1]];
    }
}

function atualizarSorteio() {
    sorteio = document.getElementById('lista-sorteio');
    sorteio.innerHTML = '';
}

function atualizarLista() {
    let lista = document.getElementById('lista-amigos');
    lista.innerHTML = '';

    for (let i = 0; i < amigos.length; i++) {
    // Cria um elemento de parágrafo para cada amigo
        let paragrafo = document.createElement('p');
        paragrafo.textContent = amigos[i];

    // Adiciona um evento de clique para excluir o amigo
        paragrafo.addEventListener('click', function() {
        excluirAmigo(i);
    });
    // Adiciona o parágrafo à lista
        lista.appendChild(paragrafo);
    }
}

function reiniciar() {
    amigos = [];
    document.getElementById('lista-amigos').innerHTML = '';
    document.getElementById('lista-sorteio').innerHTML = '';

}