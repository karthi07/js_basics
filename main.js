let  bf_list = [];
let  lunch_list = [];
let  dinner_list = [];

const bfItemName = document.getElementById("bf-item-name");
const bfNameList = document.getElementById("bf-name-list");
const lunchItemName = document.getElementById("lunch-item-name");
const lunchNameList = document.getElementById("lunch-name-list");
const dinnerItemName = document.getElementById("dinner-item-name");
const dinnerNameList = document.getElementById("dinner-name-list");

function getRandom() {
    var random_item =  Math.floor(Math.random() * name_list.length)
    document.getElementById('selectedItem').innerHTML = name_list[random_item]
}

// function getData(){
//     fetch('users.json').then(response => response.json()).
//     then(data => { name_list=data.name_list; showData() });
//   }

//  function showData(){
//     name_list.forEach(name=>{
//         const liTag = document.createElement('li');
//         liTag.innerHTML = name
//         todoUl.appendChild(liTag);
//     })

//   }

function addTask(tasktype) {
    if (tasktype == 1)
    {
        const liTag = document.createElement('li');
        liTag.innerHTML = bfItemName.value.trim()
        bfNameList.appendChild(liTag);
        bf_list.push(bfItemName.value.trim())
        bfItemName.value = ''

    }

    if (tasktype == 2)
    {
        const liTag = document.createElement('li');
        liTag.innerHTML = lunchItemName.value.trim()
        lunchNameList.appendChild(liTag);
        lunch_list.push(lunchItemName.value.trim())
        lunchItemName.value = ''

    }


    if (tasktype == 3)
    {
        const liTag = document.createElement('li');
        liTag.innerHTML = dinnerItemName.value.trim()
        dinnerNameList.appendChild(liTag);
        dinner_list.push(dinnerItemName.value.trim())
        dinnerItemName.value = ''

    }


    
}

// getData()