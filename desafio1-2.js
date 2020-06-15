// Construção e impressão de objetos

const empresa = {
  nome: "Rocketseat",
  cor: "Roxo",
  foco: "Programação",
  endereco: {
    rua: "Rua Guilherme Gembala",
    numero: 260
  }
}

console.log(`A empresa ${empresa.nome} está localizada em ${empresa.endereco.rua}, ${empresa.endereco.numero}`)

// Vetores e objetos

const programadores = [
  {
    nome: "Fulaninho",
    idade: 27,
    tecnologias: [
      { nome: 'C++', 
        especialidade: 'Desktop' },
      { nome: 'Python', especialidade: 'Data Science' },
      { nome: 'JavaScript', especialidade: 'Web/Mobile' }
    ]
  }
]

console.log(`O usuário ${programadores[0].nome} tem ${programadores[0].idade} anos e usa a tecnologia ${programadores[0].tecnologias[0].nome} com especialidade em ${programadores[0].tecnologias[0].especialidade}`)