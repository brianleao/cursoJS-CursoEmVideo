function tabuada() {
  let v = document.querySelector("#valor")
  let tab = document.querySelector("#tab")
  if (v.value.length == 0) {
    alert("[ERRO] Por favor, insira um número.")
  } else {
    tab.innerHTML = ''
    let n = Number(v.value)
    for(let c = 1; c <= 10; c++) {
      let item = document.createElement('option')
      item.text = `${n} x ${c} = ${n * c}`
      item.value = `tab ${c}`
      tab.appendChild(item)
    }
  }
}