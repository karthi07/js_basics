
var name_list = []

function getRandom() {
    var random_item =  Math.floor(Math.random() * name_list.length)
    document.getElementById('selectedItem').innerHTML = name_list[random_item]
}

function addTask() {
    const todoText = document.getElementById("todo-text");
    const todoUl = document.getElementById("todo-ul");
    
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

