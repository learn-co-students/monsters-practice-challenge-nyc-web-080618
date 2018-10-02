class Monster {
  constructor(monster){
    this.name = monster.name
    this.age = monster.age
    this.description = monster.description
    this.id = monster.id
    Monster.all.push(this)
  }
}

Monster.all = []
