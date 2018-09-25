// const container = document.createElement('div')
const monsterContainer = document.getElementById('monster-container')
const forwardBtn = document.getElementById('forward')
const backBtn = document.getElementById('back')
let index = 0




fetch('http://localhost:3000/monsters')
.then(resp=> resp.json())
.then(data=> {
 let showing = data.slice(index,50)
  showing.forEach(function(monster) {

  let container = document.createElement('div')
 container.innerHTML += `
 <h2> ${monster.id}</h2>
 <h4>Age: ${monster.age} </h4>
 <p>Bio: ${monster.description} </p>`


 monsterContainer.append(container)
});
})

forwardBtn.addEventListener('click', function(event){
  event.preventDefault()
  monsterContainer.innerHTML = ''
  index === 950 ? index = 0 : index += 50
  fetch('http://localhost:3000/monsters')
  .then(resp=> resp.json())
  .then(data=> {
   let showing = data.slice(index,index+=50)
   index -= 50
   console.log(showing)
   console.log(index)
    showing.forEach(function(monster) {
    let container = document.createElement('div')
   container.innerHTML += `
   <h2> ${monster.id}</h2>
   <h4>Age: ${monster.age} </h4>
   <p>Bio: ${monster.description} </p>`
   monsterContainer.append(container)
  });
  })
})


backBtn.addEventListener('click', function(event){
  event.preventDefault()
  monsterContainer.innerHTML = ''
  index === 0 ? index = 950 : index-=50
  fetch('http://localhost:3000/monsters')
  .then(resp=> resp.json())
  .then(data=> {
    // debugger
   let showing = data.slice(index,index+50)
   // console.log(showing)
   // console.log(index)
    showing.forEach(function(monster) {
    let container = document.createElement('div')
   container.innerHTML += `
   <h2> ${monster.id}</h2>
   <h4>Age: ${monster.age} </h4>
   <p>Bio: ${monster.description} </p>`
   monsterContainer.append(container)
  });
  })
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
