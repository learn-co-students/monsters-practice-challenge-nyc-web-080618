document.addEventListener('DOMContentLoaded', () => {


const monsterView = document.getElementById('monster-container')
const newMonsterForm = document.getElementById('form')


fetch('http://localhost:3000/monsters?_limit=20&page50')
  .then(function(response) {
    return response.json()
  })
  .then(function(monsters) {
    monsters.forEach(function(monster){
      var newMonster = new Monster(monster)
      monsterView.innerHTML += `<h4>${newMonster.name}</h4><p>${newMonster.age}</p><p>${newMonster.description}</p>`
    })
  })


  newMonsterForm.addEventListener("submit", (event) => {
    event.preventDefault()
    var monster = {name:event.currentTarget[0].value,age:event.currentTarget[1].value, description:event.currentTarget[2].value}
    let addingMonster = new Monster(monster)
// debugger
    fetch('http://localhost:3000/monsters', {
      method: 'POST',
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({addingMonster})
    })

  })


})
