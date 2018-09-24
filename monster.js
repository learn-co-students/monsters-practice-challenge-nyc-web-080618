class Monster {
  constructor(monsterJsonObj){
    this.name = monsterJsonObj.name;
    this.age = monsterJsonObj.age;
    this.description = monsterJsonObj.description;
    this.id = monsterJsonObj.id
    Monster.all.push(this);
  }

  render(){
    return `
        <div id="${this.id}">
          <h2>${this.name}</h2>
            <h4>${this.age}</h4>
            <p>${this.description}</p>
        </div>
        `
  }

}

Monster.all = [];
