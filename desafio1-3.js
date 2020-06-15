// // Usuários e tecnologias

// const usuarios = [
//   { nome: "Fulano", tecnologias: ["HTML", "Javascript"] },
//   { nome: "Fulaninho", tecnologias: ["JavaScript", "Python"] },
//   { nome: "Fulanão", tecnologias: ["HTML", "CSS"] }
// ];

// for (let i = 0; i<usuarios.length; i++){
//   console.log(`${usuarios[i].nome} trabalha com ${usuarios[i].tecnologias[0]}, ${usuarios[i].tecnologias[1]}`)
// }

// //Busca por tecnologia

// function usaCss(usuario) {
//   for(let j = 0; j < usuario.tecnologias.length; j++){
//     if(usuario.tecnologias[j] == "CSS"){
//       return true
//     }
//   }
//   return false
// }



// for (let i = 0; i < usuarios.length; i++){
//   const respostaCss = usaCss(usuarios[i])
  
//   if(respostaCss){
//     console.log(`O usuário ${usuarios[i].nome} trabalha com CSS`)
//   }
// }

const usuarios = [
  {
    nome: "Salvio",
    receitas: [115.3, 48.7, 98.3, 14.5],
    despesas: [85.3, 13.5, 19.9]
  },
  {
    nome: "Marcio",
    receitas: [24.6, 214.3, 45.3],
    despesas: [185.3, 12.1, 120.0]
  },
  {
    nome: "Lucia",
    receitas: [9.8, 120.3, 340.2, 45.3],
    despesas: [450.2, 29.9]
  }
];

function somaNumeros(numeros) {
  let soma = 0
  for (let i = 0; i < numeros.length ; i++){
    soma += numeros[i]
  }
  return soma
}

function calculaSaldo(receitas, despesas) {
  return somaNumeros(receitas) - somaNumeros(despesas)
}

for (let i = 0; i < usuarios.length; i++){
  let saldo = calculaSaldo(usuarios[i].receitas, usuarios[i].despesas)
  let sinal = ""
  if (saldo > 0){
    sinal = "POSITIVO"
  }else{
    sinal = "NEGATIVO"
  }
  console.log(`${usuarios[i].nome} possui saldo ${sinal} de ${saldo.toFixed(1)}`)
}