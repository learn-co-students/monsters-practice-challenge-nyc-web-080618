document.addEventListener("DOMContentLoaded", () => {

const monsterCollection = document.getElementById('monster-container');
const pageBack = document.getElementById('back');
const pageforward = document.getElementById('forward')



  fetch('http://localhost:3000/monsters/?_limit=50&_page=1')
    .then((response)=> {return response.json()})
    .then((monsterJsonObj)=> {
      monsterJsonObj.forEach((monsterObj)=>{
        new Monster(monsterObj)
        const allMonstersHTMLString = Monster.all.map((monster)=>{
          return monster.render()
        }).join('')
        monsterCollection.innerHTML = allMonstersHTMLString
        // const pageNumber = (monsterJsonObj[49].id) / 50;

      })
    })

  let counter = 1;

  pageBack.addEventListener('click', (event) => {
    debugger
      counter -= 1;
      fetch(`http://localhost:3000/monsters/?_limit=50&_page=${counter}`)
        .then((response)=> {return response.json()})
        .then((monsterJsonObj)=> {
          monsterJsonObj.forEach((monsterObj)=>{
            new Monster(monsterObj)
            const allMonstersHTMLString = Monster.all.map((monster)=>{
              return monster.render()
            }).join('')
            monsterCollection.innerHTML = allMonstersHTMLString
            // const pageNumber = (monsterJsonObj[49].id) / 50;
        })
      })
    })

    pageforward.addEventListener('click', (event) => {
        counter += 1;
        fetch(`http://localhost:3000/monsters/?_limit=50&_page=${counter}`)
          .then((response)=> {return response.json()})
          .then((monsterJsonObj)=> {
            monsterJsonObj.forEach((monsterObj)=>{
              new Monster(monsterObj)
              const allMonstersHTMLString = Monster.all.map((monster)=>{
                return monster.render()
              }).join('')
              monsterCollection.innerHTML = allMonstersHTMLString
              // const pageNumber = (monsterJsonObj[49].id) / 50;
            })
          })
      })



    })
