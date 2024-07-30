$(document).ready(function () {
    // Evento para adicionar uma nova tarefa à lista
    $('#task-form').submit(function (event) {
        event.preventDefault() // Impede o envio padrão do formulário

        let task = $('#task').val() // Obtém o valor da tarefa
        let date = $('#date-task').val() // Obtém o valor da data
        let time = $('#timeHours').val() // Obtém o valor da hora

        // Validação dos campos obrigatórios
        if (!task || !date || !time) {
            alert('Todos os campos são obrigatórios.')
            return
        }

        // Criação do item da lista
        let listItem = `
            <li class="li-organizacao">
                <div class="primary mark"><p>${task}</p></div>
                <div class="second mark"><p>${date}</p></div>
                <div class="three mark"><p>${time}</p></div>
                <div class="check mark"><input type="checkbox" class="completed-task"></div>
            </li>
        `

        // Adiciona o item à lista e limpa os campos
        $('#list').append(listItem)
        $('#task').val('')
        $('#date-task').val('')
        $('#timeHours').val('')
    })

    // Evento para selecionar uma tarefa e alterar o background
    $(document).on('click', '.mark', function (e) {
        if (!$(e.target).is('.completed-task')) {
            e.stopPropagation() // Impede que o evento clique se propague para elementos pais
            $(this).closest('.li-organizacao').toggleClass('selected') // Alterna a classe 'selected'
            updateDeleteButton() // Atualiza o botão de deletar
        }
    })

    // Evento para selecionar uma tarefa ao clicar em qualquer parte do item
    $(document).on('click', '.li-organizacao', function (e) {
        if (!$(e.target).is('.completed-task')) {
            $(this).toggleClass('selected') // Alterna a classe 'selected'
            updateDeleteButton() // Atualiza o botão de deletar
        }
    })

    // Evento para impedir a propagação do clique no checkbox
    $(document).on('click', '.completed-task', function (e) {
        e.stopPropagation() // Impede a propagação do evento clique
    })

    // Evento para remover as tarefas selecionadas
    $('#del-line').click(function () {
        $('.li-organizacao.selected').remove() // Remove as tarefas selecionadas
        updateDeleteButton() // Atualiza o botão de deletar
    })

    // Função para atualizar a visibilidade do botão de deletar
    function updateDeleteButton() {
        if ($('.li-organizacao.selected').length > 0) {
            $('#del-line').css('display', 'block') // Mostra o botão de deletar
        } else {
            $('#del-line').css('display', 'none') // Esconde o botão de deletar
        }
    }
})
