function carregar () {
  let msg = document.querySelector("#msg");
  let img = document.querySelector("#imagem");
  let corpo = document.body;
  let data = new Date()
  let hora = data.getHours()
  msg.innerHTML = `Agora são ${hora} horas.`

  if (hora >= 0 && hora < 12) {
    img.src = './images/manha.png'
    corpo.style.background = 'yellow';
  } else if (hora >= 12 && hora <= 18) {
    img.src = "./images/tarde.png"
    corpo.style.background = "orange"
  } else {
    img.src = "./images/noite.png"
    corpo.style.background = "black"
  }

}
