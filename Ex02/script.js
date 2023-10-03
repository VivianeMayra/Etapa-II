function calculate() {
  var data = new Date()
  var ano = data.getFullYear()
  var anoDeNascimento = document.getElementById("ano") // pega o ano de nascimento
  var mensage = document.getElementById("mensage")

  if (
    anoDeNascimento.value.length == 0 ||
    Number(anoDeNascimento.value) > ano
  ) {
    alert("Verifique os dados e tente novamente!")
  } else {
    var sexo = document.getElementsByName("sexo")
    var idade = ano - Number(anoDeNascimento.value)
    var genero = ""
    var image = document.createElement("img")
    image.setAttribute("id", "image")

    if (sexo[0].checked) {
      genero = "Homem"

      if (idade >= 0 && idade < 5) {
        image.setAttribute("src", "./images/babyboy.jpg")
      } else if (idade < 12) {
        image.setAttribute("src", "./images/kidboy.jpg")
      } else if (idade < 18) {
        image.setAttribute("src", "./images/boy.jpg")
      } else if (idade < 50) {
        image.setAttribute("src", "./images/man.jpg")
      } else {
        image.setAttribute("src", "./images/grandfather.jpg")
      }
    } else {
      genero = "Mulher"

      if (idade >= 0 && idade < 5) {
        image.setAttribute("src", "./images/babygirl.jpg")
      } else if (idade < 12) {
        image.setAttribute("src", "./images/kidgirl.jpg")
      } else if (idade < 18) {
        image.setAttribute("src", "./images/girl.jpg")
      } else if (idade < 50) {
        image.setAttribute("src", "./images/woman.jpg")
      } else {
        image.setAttribute("src", "./images/grandmother.jpg")
      }
    }
    mensage.innerHTML = `Detectamos ${genero} com ${idade} anos`
    mensage.appendChild(image)
  }
}
