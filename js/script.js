let entrada = document.getElementById('entrada-tarefa')

let botaoAdicionar  = document.getElementById('adicionar-tarefa')
let main = document.getElementById("lista-tarefas")

function adicionarTarefa(){
    let textoEntrada = entrada.value

    if((textoEntrada !== "") && (textoEntrada !== null) && ( textoEntrada !== undefined)){
        let novoItem = `<div class="item">
            <section class="item-icone">
                <i class="icon-cicle"> <img src="media/circle-outline.svg" alt="circle"></i>
            </section>
            <section class="item-nome">
                ${textoEntrada}
            </section>
            <section class="item-botao">
                <button class="delete"> </button>
            </section>
        </div>`;

        main.innerHTML += novoItem;

        //limpa a entrada quando uma tarefa é adicionada
        entrada.value = ""
        entrada.focus()
    }
}

//aciona o botão adicionar quando aperto Enter no teclado 
entrada.addEventListener("keyup", function(event){
    if(event.keyCode === 13){
        event.preventDefault()
        botaoAdicionar.click()
    }
})