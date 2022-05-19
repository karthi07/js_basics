let  name_list = [];

const todoText = document.getElementById("todo-text");
const todoUl = document.getElementById("todo-ul");

function getRandom() {
    var random_item =  Math.floor(Math.random() * name_list.length)
    document.getElementById('selectedItem').innerHTML = name_list[random_item]
}

function getData(){
    fetch('users.json').then(response => response.json()).
    then(data => { name_list=data.name_list; showData() });
  }

 function showData(){
    name_list.forEach(name=>{
        const liTag = document.createElement('li');
        liTag.innerHTML = name
        todoUl.appendChild(liTag);
    })

  }

function addTask() {
    
    if (todoText.value.trim() === '') {
        alert('Enter some text');
    } else {
        const liTag = document.createElement('li');
        liTag.innerHTML = todoText.value.trim()
        todoUl.appendChild(liTag);
        name_list.push(todoText.value.trim())
        todoText.value = ''
    }
}

getData()