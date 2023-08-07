function contar() {
  let inicio = document.querySelector('#valini')
  let fim = document.querySelector('#valfim')
  let passo = document.querySelector('#passo')
  let resp = document.querySelector('#res')

  if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
    resp.innerHTML = "Erro, Impossível contar!"
  } else {
    resp.innerHTML = "Contando: <br>"
    let i = Number(inicio.value)
    let f = Number(fim.value)
    let p = Number(passo.value)

    if (p <= 0) {
      alert('Passo inválido! Considerando passo: 1')
      p = 1
    }

    if(i < f) {
      for (let c = i; c <= f; c += p) {
        //o += para o resp serve para concatenar e não soma-lo, assim podendo mostrar todos os números em sequência.
        resp.innerHTML += `${c} \u{1F449} `
      }
    } else {
      for(let c = i; c >= f; c-=p) {
        resp.innerHTML += `${c} \u{1F449} `
      }
    }
    resp.innerHTML += `\u{1F3C1}`


  }

}