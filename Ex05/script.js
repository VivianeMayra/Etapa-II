let number = document.getElementById("numero")
let tabNumber = document.getElementById("selecttab")
let result = document.getElementById("result")
let values = []

function isNumber(n) {
  if (Number(n) >= 1 && Number(n) <= 100) {
    return true
  } else {
    return false
  }
}

function inList(n, list) {
  if (list.indexOf(Number(n)) != -1) {
    return true
  } else {
    return false
  }
}

function addNumber() {
  if (isNumber(number.value) && !inList(number.value, values)) {
    values.push(Number(number.value))
    let item = document.createElement("option")
    item.text = `Valor ${number.value} adicionado`
    tabNumber.appendChild(item)
  } else {
    alert("Valor inválido ou já está na lista.")
  }
  number.value = ""
  number.focus()
}

function finalizar() {
  if (values.length == 0) {
    alert("Lista vazia! Informe seus números e adicione-os")
  } else {
    //Pega a quantidade total do vetor
    var total = values.length

    // Encontre o menor valor sem ordenar a lista
    var numberSmaller = Math.min.apply(null, values)

    //pega o maior valor
    var numberBigger = Math.max.apply(null, values)

    //Soma dos valores dos elementos do vetor
    var sumNumber = 0

    for (var x = 0; x < values.length; x++) {
      sumNumber += values[x]
    }

    //média dos valores
    var media = sumNumber / total

    result.innerHTML = `Ao todo, temos ${total} números cadastrados <br> O menor número cadastrado foi ${numberSmaller} <br> O maior número foi ${numberBigger} <br> A soma dos valores é ${sumNumber} <br> sua média será ${media}`
  }
}
