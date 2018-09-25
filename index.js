document.addEventListener("DOMContentLoaded",()=>{
   const monsterRender=document.getElementById('monster-render')
   const monsterForm=document.getElementById('add-monster-form')
   const back =document.getElementById('back')
   const forward=document.getElementById('forward')
   let counter=1
   const renderAll=()=>{
     fetch(`http://localhost:3000/monsters/?_limit=50&_page=${counter}`).then(
     response=>response.json()
   ).then(obj=>
         {monsterRender.innerHTML=obj.map(monsterobj=>{
         const monster=new Monster(monsterobj)
         return monster.render()
       }).join("")
   })}

   renderAll()

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
    counter+=1
    renderAll()
  })

 back.addEventListener("click",e=>{
   counter-=1
   renderAll()
 })

})
