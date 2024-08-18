//FUNCAO GERAL COM METODO READY
$(document).ready(function () {
    //FUNCAO PARA CARROSEL
    $('#carousel-imagens').slick({
        autoplay: true,
        autoplaySpeed: 2000,
        dots:true,
        arrows: false
    })

    //MASCARA DOS ELEMENTOS
    $('#telefone').mask('(00) 00000-0000', {
        placeholder: '(DDD) 12345-6789'
    })

    $('#cpf').mask('000.000.000-00', {
        placeholder: '123.456.789-00'
    })

    $('#cep').mask('00000-000', {
        placeholder: '012345-678'
    })

    //CHAMANDO METODO VALIDATE PARA O FORMULARIO
    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true
            },
            endereco: {
                required: true
            },
            cep: {
                required: true
            },
            cpf: {
                required: true
            },
        },
        //FUNCAO DE VALIDACAO E MENSSAGENS 
        submitHandler: function (form) {
            alert("Sua requisição foi enviada para análise, parabéns pela aquisição!")
            form.reset();
        },
        invalidHandler: function (form, validator) {
            alert("Por favor, preencha os campos para prosseguir com a compra!")
        }
    })

})