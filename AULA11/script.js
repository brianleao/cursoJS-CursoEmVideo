function enviar () {
  let resposta = window.document.querySelector('#texto');
  let r = resposta.value;
  let sla = window.document.querySelector('.resposta');

  if(r == 'bonito') {
    sla.innerText = 'Você é lindo!';
  } else {
    sla.innerText = 'Você é estranho!';
  }
}