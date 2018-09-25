document.addEventListener("DOMContentLoaded", () => {

  const monsterCollection = document.getElementById("monster-container")
  const pageBack = document.getElementById('back');
  const pageForward = document.getElementById('forward')
  const createMonsterFrom = document.getElementById("add-monster-form")


  fetch('http://localhost:3000/monsters/?_limit=50&_page=1')
    .then((response)=>{return response.json()})
    .then((monsterJsonObj)=>{
      monsterCollection.innerHTML = monsterJsonObj.map((monsterObj)=>{
        let monster = new Monster(monsterObj)
        return monster.render();
      }).join("")
    })

    let counter = 1;

    pageForward.addEventListener('click', (event)=>{
      monsterCollection.innerHTML = null;
      counter +=1;
      fetch(`http://localhost:3000/monsters/?_limit=50&_page=${counter}`)
        .then((response)=>{return response.json()})
        .then((monsterJsonObj)=> {
          monsterCollection.innerHTML = monsterJsonObj.map((monsterObj)=>{
            let monster = new Monster(monsterObj)
            return monster.render();
          }).join("")
        })
    })

    pageBack.addEventListener('click', (event)=>{
      monsterCollection.innerHTML = null;
      counter -=1;
      fetch(`http://localhost:3000/monsters/?_limit=50&_page=${counter}`)
        .then((response)=>{return response.json()})
        .then((monsterJsonObj)=> {
          monsterCollection.innerHTML = monsterJsonObj.map((monsterObj)=>{
            let monster = new Monster(monsterObj)
            return monster.render();
          }).join("")
        })
    })

    createMonsterFrom.addEventListener('submit', (event)=>{
      const monsterName = document.getElementById("new-monster-name").value
      const monsterAge = document.getElementById("new-monster-age").value
      const monsterDescription = document.getElementById("new-monster-description").value

      fetch('http://localhost:3000/monsters', {
        method: "POST",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: monsterName,
          age: monsterAge,
          description: monsterDescription
        })
      })
      .then(response=> response.json())
      .then(jsonMonster =>{
        const newMonster = new Monster(jsonMonster)
        monsterCollection.innerHTML += newMonster.render()
        console.log(newMonster)
      })
      event.target.reset();
    })





}) //end DOM Content Loaded
