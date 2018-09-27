document.addEventListener("DOMContentLoaded", function(){

  let pageNum = 1;

//step 1, get page1 once loaded;
  const monstersContainer = document.getElementById('monster-container');

  fetch('http://localhost:3000/monsters/?_limit=5&_page=1')
    .then(r => r.json())
    .then(monsterData => {
      monstersContainer.innerHTML = monsterData.map(monster => {
        let newMonster = new Monster(monster);
        return newMonster.renderInfo()
      }).join("")
    })

//step 2, go to next/previous page;

  const nextButton = document.getElementById('forward')

  document.addEventListener("click", (event) => {
    if (event.target.id === 'forward'){
      pageNum++;
      fetch(`http://localhost:3000/monsters/?_limit=5&_page=${pageNum}`)
      .then(r => r.json())
      .then(monsterData => {
        monstersContainer.innerHTML = monsterData.map(monster => {
          let newMonster = new Monster(monster);
          return newMonster.renderInfo()
        }).join("")
      })
    }

    if (event.target.id === 'back'){
      pageNum--;
      fetch(`http://localhost:3000/monsters/?_limit=5&_page=${pageNum}`)
      .then(r => r.json())
      .then(monsterData => {
        monstersContainer.innerHTML = monsterData.map(monster => {
          let newMonster = new Monster(monster);
          return newMonster.renderInfo()
        }).join("")
      })
    }
  })

//step 3, create new monster;
  const monsterForm = document.getElementById("monster-form");

  monsterForm.addEventListener("submit", (event) => {
    event.preventDefault()
    //event.preventDefault() staying in the same webpage after submitted form,
    //without this, HTML will bring user to another webpage after submitted, which
    //make line 73 can't be correctly shown on the page.
    const inputName = document.getElementById('name').value;
    const inputAge = document.getElementById('age').value;
    const inputDescription = document.getElementById('description').value;

    fetch('http://localhost:3000/monsters', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: inputName,
        age: inputAge,
        description: inputDescription
      })
    }).then(response => response.json())
      .then(monsterJson => {
        const newMonster = new Monster(monsterJson)
        monstersContainer.innerHTML += newMonster.renderInfo();
      })
  })


})
