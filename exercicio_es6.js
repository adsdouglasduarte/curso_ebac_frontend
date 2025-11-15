class Pessoa {
  constructor(nome) {
    this.nome = nome
  }
}
// Aluno herda de Pessoa

class Aluno extends Pessoa {
  constructor(nome, nota) {
    super(nome)
    this.nota = nota
  }
}

const alunos = [
  new Aluno('Douglas', 9),
  new Aluno('Ana', 7),
  new Aluno('Rafael', 5),
  new Aluno('Marina', 10),
  new Aluno('Carlos', 3),
  new Aluno('Fernanda', 8)
]

const filtrarAprovados = lista => 
  lista.filter(aluno => aluno.nota >= 6)

const aprovados = filtrarAprovados(alunos)

console.log(aprovados)
