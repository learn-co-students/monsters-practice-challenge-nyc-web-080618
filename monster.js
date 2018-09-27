class Monster {
  constructor(monster){
    this.id = monster.id;
    this.name = monster.name;
    this.age = monster.age;
    this.description = monster.description;
    allMonsters.push(this)
  }

  renderInfo(){
    return `<div>
    <h2>${this.name}</h2>
    <h4>Age: ${this.age}</h4>
    <p>${this.description}</p>
    </div>
    `
  }
}

allMonsters = [];
