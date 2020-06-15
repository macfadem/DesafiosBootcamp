// Cálculo de IMC:

const nome = "Kevin";
const peso = 66;
const altura = 1.80;

const imc = peso / (altura * altura);

if (imc >= 30) {
    console.log(`${nome}, você está acima do peso`)
}else{
    console.log(`${nome}, você não está acima do peso`)
}

// Cálculo de aposentadoria:

const nome = "Mayk";
const sexo = "M";
const idade = 55;
const contribuicao = 40;
let aindaN = "";

if(sexo == "M" || "masculino"){
  if(!(contribuicao >= 35 && (contribuicao + idade) >= 95 )){
    aindaN = "ainda não "
  }
}else{
  if(!(contribuicao >= 30 && (contribuicao + idade) >= 85 )){
    aindaN = "ainda não "
  }
}
console.log(`${nome}, você ${aindaN}pode se aposentar!`)
