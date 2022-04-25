let toDoList = [];
const form = document.querySelector('form');    
const ul = document.querySelector('ul'); 
const taskNumber = document.querySelector('h2 span');  
const input = document.querySelector('input');
const input2 = document.querySelector('input.wyszukaj')


const renderList = () => {
    taskNumber.textContent=toDoList.length;
    ul.textContent = "";
    toDoList.forEach((toDoElement,key)=>{
        toDoElement.dataset.key=key;
        ul.appendChild(toDoElement);
    })
}


const removeTask = (e) => {

    const index = e.target.parentNode.dataset.key;
    toDoList.splice(index,1);
    renderList();
}

const addTask=(e)=> {

    e.preventDefault();
    const titleTask = input.value;
    if (titleTask ==="") return;
    const task = document.createElement('li');
    task.innerHTML ="<p>" + titleTask + "</p>"  + "<button>Usuń</button>";
    toDoList.push(task);
    input.value = "";
    renderList();
    task.querySelector('button').addEventListener('click',removeTask);
}

const searchTask = (e) => {
const searchText = input2.value.toLowerCase();
let lista = toDoList;
lista = lista.filter(li => li.textContent.toLowerCase().includes(searchText))
ul.textContent = "";
lista.forEach(li => ul.appendChild(li))
}


form.addEventListener('submit', addTask)
input2.addEventListener('input', searchTask)

