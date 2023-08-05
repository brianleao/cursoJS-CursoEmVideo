function funcNacio() {
  let nacio = document.querySelector('#nacionalidade');
  let r = document.querySelector('.resposta');
  let resp = nacio.value;

  if(nacio.value == 'Brasil') {
    r.innerHTML = 'Você é brasileiro!';
  } else {
    r.innerHTML = "Você é estrangeiro!"
  }
}

console.log(funcNacio());