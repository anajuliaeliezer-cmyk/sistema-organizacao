// Adiciona a tarefa
function adicionarTarefa() {
    let input = document.getElementById("tarefaInput");
    let lista = document.getElementById("listaTarefas");
    
    if (input.value === "") return;

    let li = document.createElement("li");
    // Adicionamos a classe 'item-tarefa' para facilitar o filtro
    li.innerHTML = `
        <span class="texto-tarefa" onclick="marcarConcluida(this)">
            ${input.value} <span class="check-icon" style="display:none;">✔️</span>
        </span>
        <button onclick="this.parentElement.remove()">Excluir</button>
    `;

    lista.appendChild(li);
    input.value = "";
}

// Marca como concluída
function marcarConcluida(elemento) {
    elemento.parentElement.classList.toggle("concluida");
    let icone = elemento.querySelector(".check-icon");
    icone.style.display = elemento.parentElement.classList.contains("concluida") ? "inline" : "none";
}

// Filtra as tarefas
function filtrar(tipo) {
    let itens = document.getElementById("listaTarefas").getElementsByTagName("li");
    
    for (let li of itens) {
        if (tipo === 'todas') {
            li.style.display = "flex";
        } else if (tipo === 'concluidas') {
            li.style.display = li.classList.contains("concluida") ? "flex" : "none";
        }
    }
}