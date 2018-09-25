let monsters = []
class Monster {
  constructor(obj) {
    this.name = obj.name,
    this.age = obj.age,
    this.description = obj.description,
    this.id = obj.id,
    monsters.push(this)
  }
  render() {
    return `<div class="monster"><h1>${this.name}</h1>
    <h3>Age: ${this.age} Years</h3>
    <p>${this.description}</p></div>`
  }

}
