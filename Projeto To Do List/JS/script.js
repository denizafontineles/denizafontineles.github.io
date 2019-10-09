
const formulario = document.getElementById("container__form")
const botaoAdiciona = document.getElementById("button-tarefas")
const boxTarefas = document.getElementById("container-tarefas__lista")
let digitarTarefas = document.getElementById("formulario-input")
const etiqueta = document.getElementById("etiqueta")
const buttonRiscarTarefa = document.getElementById("button__riscar-tarefa")
const buttonExcluir = document.getElementById("button__excluir")
let buttonSelecionados = document.getElementById("button__selecionados")

formulario.addEventListener("submit", function (evento) {
    evento.preventDefault()
    let guardarValorTaf = digitarTarefas.value.trim()
    
    if (guardarValorTaf === "") {
        digitarTarefas.setAttribute("placeholder", "Digite tarefa válida, senhora.")
        // digitarTarefas.classList.add("erro-vermelho")
    }
    
    else {
        
        // ============= CRIAR TAGS DO HTML ==============
        
        let listarTarefas = document.createElement("div")
        let mostrarTarefas = document.createElement("p")
        let cancel = document.createElement("button")
        let buttonEditar = document.createElement("button")
        let valorEtiqueta = document.createElement("p")
        let pegaValorEtiqueta = etiqueta.value
        
        // ============= COLOCAR TAGS CRIADAS DENTRO DO ELEMENTO PAI ==============
        
        boxTarefas.appendChild(listarTarefas)
        listarTarefas.appendChild(mostrarTarefas)
        listarTarefas.appendChild(valorEtiqueta)
        listarTarefas.appendChild(buttonEditar)
        listarTarefas.appendChild(cancel)
        
        // =================== CRIAR ATRIBUTOS DAS TAGS CRIADAS =====================
        
        digitarTarefas.setAttribute("placeholder", "Digite sua tarefa")
        listarTarefas.setAttribute("class", "lista__tarefa")
        mostrarTarefas.setAttribute("class", "paragrafo")
        buttonEditar.setAttribute("class", "botao_editar")
        cancel.setAttribute("class", "botao_x")
        digitarTarefas.getAttribute("placeholder")
        
        // ================ COLOCAR O VALOR DO USUÁRIO DENTRO DA TAG ==================
        
        mostrarTarefas.textContent = guardarValorTaf 
        valorEtiqueta.textContent = pegaValorEtiqueta
        
        
        // ==================== NOME DO BUTTON =====================
        
        cancel.textContent = "x"
        buttonEditar.textContent = "Editar"
        
        // ======================== EDITAR ITEM =============================
        
        buttonEditar.addEventListener("click", function (evento) {
            mostrarTarefas.classList.remove("riscar_tarefa")
            mostrarTarefas.setAttribute("contentEditable", true)
        })
        
        // =================== BUTTON DE RISCAR CADA ITEM =====================
        
        mostrarTarefas.addEventListener("click", function (evento) {
            if (mostrarTarefas.classList.contains("riscar__tarefa")) {
                mostrarTarefas.classList.remove("riscar__tarefa")
                
            } else {
                mostrarTarefas.setAttribute("class", "riscar__tarefa")
            }
        })
        
        // ================= BUTTON DE REMOVER CADA ITEM ===================
        
        cancel.addEventListener("click", function (evento) {
            listarTarefas.remove()
        })
        
        // ============== BUTTON DE RISCAR TODOS OS ITENS ====================
        
        buttonRiscarTarefa.addEventListener("click", function (evento) {
            if (mostrarTarefas) {
                mostrarTarefas.classList.add("riscar__tarefa")
            }
        })
        
        // ============== BUTTON DE REMOVER TODOS OS ITENS =================
        
        buttonExcluir.addEventListener("click", function () {
            listarTarefas.remove()
            
        })
        
        // ========== BUTTON DE REMOVER SÓ OS ITENS SELECIONADOS ===========
        
        buttonSelecionados.addEventListener("click", function (evento) {
            if (mostrarTarefas.classList.contains("riscar__tarefa")) {
                listarTarefas.remove()
            }
        })
        
        // ======================== DRAG DROP ==============================
        
        
        let dragging
        boxTarefas.setAttribute("draggable", "true")
        listarTarefas.setAttribute("draggable", "true")
        
        boxTarefas.addEventListener("dragstart", function (ev) {
            dragging = ev.target.closest(".lista__tarefa")
        })
        
        boxTarefas.addEventListener("dragover", function (ev) {
            ev.preventDefault()
            const node = ev.target.closest(".lista__tarefa")
            this.insertBefore(dragging, node)
        })
        
        formulario.reset()
    }
    
})
