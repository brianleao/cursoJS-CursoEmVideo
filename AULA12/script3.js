let agora = new Date()
let diaSem = agora.getDay()
diaSem = 7

switch (diaSem) {

  //os valores permitidos no case: são apenas números inteiros e caracteres (Strings).
  case 0:
    console.log("Domingo")
    break
  case 1:
    console.log("Segunda-feira")
    break
  case 2:
    console.log("Terça-Feira")
    break
  case 3:
    console.log("Quarta-feira")
    break
  case 4:
    console.log("Quinta-feira")
    break
  case 5:
    console.log("Sexta-feira")
    break
  case 6:
    console.log("Sábado")
    break

  default:
    console.log(`[Erro] Dia invalido!`);
    break
}