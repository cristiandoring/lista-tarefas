let entrada = document.getElementById('entrada-tarefa');
let contador = 0;
let botaoAdicionar = document.getElementById('adicionar-tarefa');
let main = document.getElementById("lista-tarefas");

function adicionarTarefa() {
    let textoEntrada = entrada.value;

    if ((textoEntrada !== "") && (textoEntrada !== null) && (textoEntrada !== undefined)) {
        ++contador;
        let novoItem = `<div id="${contador}" class="item">
            <section class="item-icone" onclick="checkTarefa(${contador})">
                <i class="icon-cicle"><img src="media/circle-outline.svg" alt="circle"></i>
            </section>
            <section class="item-nome" onclick="checkTarefa(${contador})">
                ${textoEntrada}
            </section>
            <section class="item-botao">
                <button class="delete" onclick="deletarTarefa(${contador})"></button>
            </section>
        </div>`;

        main.innerHTML += novoItem;

        // Limpa a entrada quando uma tarefa é adicionada
        entrada.value = "";
        entrada.focus();
    }
}

function deletarTarefa(id) {
    let tarefa = document.getElementById(id);
    tarefa.remove();
}

function checkTarefa(id) {
    let item = document.getElementById(id);
    let icone = item.querySelector('.icon-cicle img'); 

    if (item.classList.contains('item-clicado')) {
        item.classList.remove('item-clicado');
        icone.src = "media/circle-outline.svg";

    } else {
        
        item.classList.add('item-clicado');
        icone.src = "media/check-circle-outline.svg";
        
    }
}


// Aciona o botão adicionar quando aperto Enter no teclado
entrada.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        botaoAdicionar.click();
    }
});
