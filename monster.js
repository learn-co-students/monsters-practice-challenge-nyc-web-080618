 const allMonsters=[]
class Monster {
  constructor(obj) {
    this.name=obj.name
    this.age=obj.age
    this.description=obj.description
    allMonsters.push(this)
  }

  render(){
    return `<div> <h1>${this.name}</h1> <p>${this.age}</p> <p>${this.description}</p></div>`
  }
}
