document.addEventListener("DOMContentLoaded", () => {

const monsterCollection = document.getElementById('monster-container');
const pageBack = document.getElementById('back');
const pageforward = document.getElementById('forward')
const createFrom = document.querySelector('.add-monster-form')



  fetch('http://localhost:3000/monsters/?_limit=50&_page=1')
    .then((response)=> {return response.json()})
    .then((monsterJsonObj)=> {
      monsterCollection.innerHTML = monsterJsonObj.map((monsterObj)=>{
        let monster = new Monster(monsterObj)
        return monster.render();
      }).join("")

      })

  let counter = 1;

  pageBack.addEventListener('click', (event) => {
      counter -= 1;
      fetch(`http://localhost:3000/monsters/?_limit=50&_page=${counter}`)
        .then((response)=> {return response.json()})
        .then((monsterJsonObj)=> {
          monsterCollection.innerHTML = monsterJsonObj.map((monsterObj)=>{
            let monster = new Monster(monsterObj)
            return monster.render();
          }).join("")
      })
    })

    pageforward.addEventListener('click', (event) => {
      monsterCollection.innerHTML = null
        counter += 1;
        fetch(`http://localhost:3000/monsters/?_limit=50&_page=${counter}`)
          .then((response)=> {return response.json()})
          .then((monsterJsonObj)=> {
            monsterCollection.innerHTML = monsterJsonObj.map((monsterObj)=>{
              let monster = new Monster(monsterObj)
              return monster.render();
              /*const allMonstersHTMLString = Monster.all.map((monster)=>{
                return monster.render()
              }).join('')*/
              //monsterCollection.innerHTML = allMonstersHTMLString
              // const pageNumber = (monsterJsonObj[49].id) / 50;
            }).join("")
          })
      })

      createFrom.addEventListener('submit', (event) => {
        const createMonsterName = document.getElementById('new-monster-name').value
        const createMonsterAge = document.getElementById('new-monster-age').value
        const createMonsterDescription = document.getElementById('new-monster-description').value

        fetch("http://localhost:3000/monsters", {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            name: createMonsterName,
            age: createMonsterAge,
            description: createMonsterDescription
          })
        })
        .then(response => response.json())
        .then(jsonMonster => {
          const newMonster = new Monster(jsonMonster)
          monsterCollection.innerHTML += newMonster.render()
        })
        event.target.reset()

      })


    })
