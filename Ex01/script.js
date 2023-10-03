function load() {
  var mensage = document.getElementById("mensage")
  var image = document.getElementById("image")
  var date = new Date()
  var hour = date.getHours()
  var greeting = document.getElementById("greeting")
  mensage.innerHTML = ` Agora são ${hour} horas`
  if (hour >= 0 && hour <= 12) {
    image.src = "./images/manha.jpg"
    greeting.innerHTML = "Good morning"
  } else if (hour > 12 && hour < 18) {
    image.src = "./images/tarde.jpg"
    greeting.innerHTML = "Good afternoon"
    document.body.style.background = "#e2cd9f"
  } else {
    image.src = "./images/noite.jpg"
    greeting.innerHTML = "Good night"
    document.body.style.background = "black"
  }
}
