
const todoUl = document.getElementById("todo-ul");

function addTask() {
    const todoText = document.getElementById("todo-text");

    if (todoText.value.trim() === '') {
        alert('Enter some text');
    } else {
        const liTag = document.createElement('li');
        liTag.innerHTML = todoText.value.trim()
        todoUl.appendChild(liTag);
        todoText.value = ''
    }
}

