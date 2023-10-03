function gerarTabuada() {
  let number = document.getElementById("numero")
  let tab = document.getElementById("selecttab")
  let result = document.getElementById("mensage")

  if (number.value.length == "") {
    result.innerHTML = `ATENÇÃO! Seu campo está vazio, digite um número`
  } else {
    numberSelected = Number(number.value)
    tab.innerHTML = ""
    for (let x = 1; x <= 10; x++) {
      let item = document.createElement("option")
      item.text = `${numberSelected} x ${x} = ${numberSelected * x}`
      tab.appendChild(item)
    }
  }
}
