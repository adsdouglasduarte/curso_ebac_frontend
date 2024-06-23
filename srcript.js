//Declarando no escopo global
let valor1 = document.getElementById('num1')
let valor2 = document.getElementById('num2')
let enviando = document.getElementById('btnForm')
let msgErro = document.getElementById('fatal')

//evento ouvidor menssagem em tempo real erro
valor2.addEventListener('input', function (event){
    event.preventDefault()

    let campoA = Number(valor1.value)
    let campoB = Number(valor2.value)

    // Validar se B é maior que A
    if (campoB <= campoA) {
        msgErro.style.display = 'block'  //estilo msg de error
    }else {
        msgErro.style.display = 'none' //retirar o estilo
    }
})

//evento ouvidor submit
enviando.addEventListener('click', function avance(event) {
    event.preventDefault()


    let campoA = Number(valor1.value)
    let campoB = Number(valor2.value)

    // Validar se B é maior que A
    if (campoB <= campoA) {
        msgErro.style.display = 'block'//estilo menssagem de erro
    }

    else {
        alert('Enviado!')
//limpando formulario após submeter o form
        document.querySelector('.box-formulario').reset();
        msgErro.style.display = 'none'
    }
})
