document.addEventListener("DOMContentLoaded", function (){

  fetch("http://localhost:3000/monsters")
  .then((response) => response.json())
  .then(function (data) {
    data.forEach( monster => new Monster(monster))
  })



  const container = document.getElementById("monster-container")
  setTimeout(function () {
    const firstFifty = monsters.slice(0,50)
    firstFifty.forEach( (monster) => container.innerHTML += monster.render())
  },100)

  const nextFiftyBtn = document.getElementById("forward")
  const lastFiftyBtn = document.getElementById("back")
  lastFiftyBtn.disabled = true
  let indexPosition = 50
  nextFiftyBtn.addEventListener('click', function() {
    container.innerHTML = ""
    const nextFifty = monsters.slice(indexPosition,indexPosition += 50)
    nextFifty.forEach((monster) => container.innerHTML += monster.render())
    if (indexPosition >= 1000) {
      nextFiftyBtn.disabled = true
    } else {
      nextFiftyBtn.disabled = false
    }

    lastFiftyBtn.disabled = false
  })



  lastFiftyBtn.addEventListener('click', function(){
    container.innerHTML = ""
    indexPosition -= 50
    const lastFifty = monsters.slice(indexPosition-50,indexPosition)
    console.log(lastFifty)
    lastFifty.forEach((monster) => container.innerHTML += monster.render())
    if (indexPosition <= 50) {
      lastFiftyBtn.disabled = true
    }
  })

  const monsterForm = document.getElementById("monster-form")
  monsterForm.addEventListener('submit', function() {
    const name = document.getElementById("monster-name").value
    const age = document.getElementById("monster-age").value
    const description = document.getElementById("monster-description").value

      fetch("http://localhost:3000/monsters", {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          "name": name,
          "age": age,
          "description": description
        })
      })
  })





})
