let  bf_list = [];
let  lunch_list = [];
let  dinner_list = [];

const bfItemName = document.getElementById("bf-item-name");
const bfNameList = document.getElementById("bf-name-list");
const lunchItemName = document.getElementById("lunch-item-name");
const lunchNameList = document.getElementById("lunch-name-list");
const dinnerItemName = document.getElementById("dinner-item-name");
const dinnerNameList = document.getElementById("dinner-name-list");

function getRandom(tasktype) {

    if (tasktype == 1) {
        var random_item =  Math.floor(Math.random() * bf_list.length)
        document.getElementById('selectedItem-bf').innerHTML = bf_list[random_item]
    }
    if (tasktype == 2) {
        var random_item =  Math.floor(Math.random() * lunch_list.length)
        document.getElementById('selectedItem-lunch').innerHTML = lunch_list[random_item]
    }
    if (tasktype == 3) {
        var random_item =  Math.floor(Math.random() * dinner_list.length)
        document.getElementById('selectedItem-dinner').innerHTML = dinner_list[random_item]
    }
}
// breakfast

function getData(){

    fetch('users.json').then(response => response.json()).
    then(data => {console.log(data); bf_list=data.bf_list; showData() });
  }

 function showData(){
    bf_list.forEach(name=>{
        const liTag = document.createElement('li');
        liTag.innerHTML = name
        bfNameList.appendChild(liTag);
    })

  }
//   lunch

function getData(){

    fetch('users.json').then(response => response.json()).
    then(data => {console.log(data); lunch_list=data.lunch_list; showData() });
  }

 function showData(){
    lunch_list.forEach(name=>{
        const liTag = document.createElement('li');
        liTag.innerHTML = name
        lunchNameList.appendChild(liTag);
    })

  }


// dinner

function getData(){

    fetch('users.json').then(response => response.json()).
    then(data => {console.log(data); dinner_list=data.dinner_list; showData() });
  }

 function showData(){
    dinner_list.forEach(name=>{
        const liTag = document.createElement('li');
        liTag.innerHTML = name
        dinnerNameList.appendChild(liTag);
    })

  }
//   add task

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

getData()