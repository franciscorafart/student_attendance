console.log("Loaded main js")

//Add listeners to elements

let attended = document.getElementsByClassName('fa-thumbs-up')
let late = document.getElementsByClassName('fa-thumbs-down')
let deleteStudent = document.getElementsByClassName('fa-trash')

Array.from(attended).forEach((element)=>{
  element.addEventListener('click',function(){
    console.log('click')
    //get name and element from DOM
    const name = this.parentNode.parentNode.childNodes[1].innerText
    const lastname = this.parentNode.parentNode.childNodes[3].innerText

    //fetch request
    fetch('studAttended',{
      method: 'put',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        'name': name,
        'lastname': lastname,
        'att': 'Present'
      })
    }).then(response =>{
      if (response.ok) return response.json()
    }).then(data=>{
      console.log(data)
      window.location.reload(true)
    })
  })
});

Array.from(late).forEach((element)=>{
  element.addEventListener('click',function(){
    //get name and element from DOM
    const name = this.parentNode.parentNode.childNodes[1].innerText
    const lastname = this.parentNode.parentNode.childNodes[3].innerText

    //fetch request
    fetch('studAttended',{
      method: 'put',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        'name': name,
        'lastname': lastname,
        'att': 'Late'
      })
    }).then(response =>{
      if (response.ok) return response.json()
    }).then(data=>{
      console.log(data)
      window.location.reload(true)
    })
  })
});

Array.from(deleteStudent).forEach((element)=>{
  element.addEventListener('click',function(){
    //get name and element from DOM
    const name = this.parentNode.parentNode.childNodes[1].innerText
    const lastname = this.parentNode.parentNode.childNodes[3].innerText

    //fetch request
    fetch('delete',{
      method: 'delete',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        'name': name,
        'lastname': lastname
      })
    }).then(response =>{
      window.location.reload()
    })
  })
});

//do fetch request
