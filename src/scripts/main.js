document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('formSort').addEventListener('submit', function (e) {
        e.preventDefault()
        let maxNumber = document.getElementById('max-number').value
        maxNumber = parseInt(maxNumber)

        let randomNumber = Math.random() * maxNumber
        randomNumber = Math.floor(randomNumber + 1)

        document.getElementById('number-result').innerText = randomNumber
        document.querySelector('.result').style.display = 'block'
    })
})