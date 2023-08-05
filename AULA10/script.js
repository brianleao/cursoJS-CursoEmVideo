
/*
MÉTODO COLOCANDO AS FUNÇÕES E CHAMANDO-AS DENTRO DA DIV

function clicar () {
  let n = window.document.querySelector('#area');
  n.innerText = 'Clicou!';
  n.style.background = 'red';
}

function entrar () {
  let e = window.document.querySelector('#area');
  e.innerText = 'Entrou!'
  e.style.background = 'blue'
}

function sair () {
  let s = window.document.querySelector('#area');
  s.innerText = 'Saiu!'
  s.style.background = 'purple'

}

*/

let a = window.document.querySelector('#area');
a.addEventListener('click', clicar);
a.addEventListener('mouseenter', entrar);
a.addEventListener('mouseout', sair);

function clicar () {
  a.innerText = 'Clicou!';
  a.style.background = 'red';
}

function entrar () {
  a.innerText = 'Entrou!'
  a.style.background = 'blue'
}

function sair () {
  a.innerText = 'Saiu!'
  a.style.background = 'purple'
}