document.addEventListener("DOMContentLoaded",()=>{
   const monsterRender=document.getElementById('monster-render')
   const monsterForm=document.getElementById('add-monster-form')
   const back =document.getElementById('back')
   const forward=document.getElementById('forward')
   let start=0
   let end =50
   fetch("http://localhost:3000/monsters").then(
     response=>response.json()
   ).then(obj=>obj.map(monsterobj=>{
     new Monster(monsterobj)
   })).then(()=>{
   monsterRender.innerHTML=allMonsters.slice(start,end).map(monster=>monster.render()).join("")
 })

 monsterForm.addEventListener('submit',e=>{
   e.preventDefault()
   const name=document.getElementById('name').value
   const age=document.getElementById('age').value
   const description=document.getElementById('description').value
   fetch("http://localhost:3000/monsters",{
     method:"POST",
     headers: {
    'Accept': 'application/json, text/plain, */*',
    'Content-Type': 'application/json'
    },
    body: JSON.stringify({name:name,age:age,description:description})
  })
})//create new monster

  forward.addEventListener("click",e=>{
    start+=50
    end+=50
    if (end<allMonsters.length) {
      monsterRender.innerHTML=allMonsters.slice(start,end).map(monster=>monster.render()).join("")
    }
  })

 back.addEventListener("click",e=>{
   start-=50
   end-=50
   if (start>0) {
     monsterRender.innerHTML=allMonsters.slice(start,end).map(monster=>monster.render()).join("")
   }
 })

})
