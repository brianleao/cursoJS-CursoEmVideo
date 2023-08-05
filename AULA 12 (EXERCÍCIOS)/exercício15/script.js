function verificar() {
  let data = new Date()
  let ano = data.getFullYear()
  let fano = document.querySelector('#ano')
  let resposta = document.querySelector('#res');
  if(fano.value.length == 0 | fano.value > ano) {
    window.alert(`[ERRO] O ano é invalido, tente novamente.`)
  } else {
    //neste caso não consigo selecionar pelo querySelector
    let sex = document.getElementsByName('radsex');
    let idade = ano - Number(fano.value);
    let gênero = ''
    let img = document.querySelector('#imagem');
    if(sex[0].checked) {
      gênero = 'Homem'
      //criança masculino
      if(idade >=0 && idade < 12) {
        img.src = './images/foto-bebe-homem.png'
      }
      //adolescente masculino
      else if (idade < 18) {
        img.src = './images/foto-jovem-homem.png'
      }
      //adulto masculino
      else if (idade < 65){
        img.src = './images/homem-adulto.png'
      }
      //idoso
      else {
        img.src = './images/foto-idoso-homem.png'
      }


    } else if (sex[1].checked) {
      gênero = "Mulher"
      //criança feminino
      if (idade >= 0 && idade < 12) {
        img.src = './images/foto-bebe-mulher.png'
      }
      //adolescente feminino
      else if (idade <= 18) {
        img.src = "./images/foto-jovem-mulher.png"
      }
      //adulto feminino
      else if (idade < 65) {
        img.src = "./images/mulher-adulta.png"
      }
      //idosa
      else {
        img.src = "./images/foto-idosa-mulher.png"
      }
    }
    resposta.innerHTML = `Detectamos ${gênero} com ${idade} anos`
  }


}