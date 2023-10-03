function contagem() {
  let numberInitial = document.getElementById("inicio")
  let numberEnd = document.getElementById("fim")
  let passo = document.getElementById("passo")
  let mensage = document.getElementById("mensage")

  if (
    numberInitial.value.length == 0 ||
    passo.value.length == 0 ||
    numberEnd.value.length == 0
  ) {
    alert("[ERRO]: Ops...digite um número válido. Campos incorretos")
    mensage.innerHTML = "Impossível contar!"
  } else {
    mensage.innerHTML = "Contando: "
    var inicio = Number(numberInitial.value)
    var fim = Number(numberEnd.value)
    var increment = Number(passo.value)

    if (increment <= 0) {
      alert("Passo inválido! Irei considerar passo 1")
      increment = 1
    }

    if (inicio < fim) {
      for (let x = inicio; x <= fim; x += increment) {
        mensage.innerHTML += ` ${x} \u{1F449}  `
      }
    } else {
      for (let x = inicio; x >= fim; x -= increment) {
        mensage.innerHTML += `${x} \u{1F449} `
      }
    }
    mensage.innerHTML += `\u{1F3C1}`
  }
}
