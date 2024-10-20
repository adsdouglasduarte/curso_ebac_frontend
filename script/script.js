// Aplicar máscara ao campo telefone
$('#telefone').mask('(00)00000-0000')

// Validação do formulário
$('#form-main').validate({
    rules: {
        nome: {
            required: true
        },
        email: {
            required: true,
            email: true
        },
        telefone: {
            required: false, // Opcional
        },
        menssagem: {
            required: true
        }
    },

    // Mensagens de validação personalizadas
    messages: {
        nome: {
            required: 'Preencha o campo nome'
        },
        email: {
            required: 'Preencha o campo e-mail',
            email: 'Preencha o campo e-mail com um formato válido'
        },
        menssagem: {
            required: 'Preencha o campo mensagem'
        }
    }
})
