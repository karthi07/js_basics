let  name_list = [ "pavi", "nandhini", "sangi"];

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
name_list =JSON.stringify(name_list);
name_list=JSON.parse(name_list);
console.log(name_list.addtsk);