// SELECTORS
const input = document.querySelector("#search");
const button = document.querySelector(".addButton");
const list = document.querySelector(".list");

// EVENT LISTENERS

button.addEventListener('click', addTask);
list.addEventListener('click', deleteCheck);

//FUNCTIONS

function addTask(event){

    /*list(li)
        main-task(task)
            task-uri(taskItem)
            check(check)
            delete(delete)
    */

    event.preventDefault();

    //taskDiv
    const taskDiv = document.createElement("div");
    taskDiv.classList.add("task");

    //List
    const newTask=document.createElement('li');
    newTask.classList.add("taskItem");
    taskDiv.appendChild(newTask);
    newTask.innerText = input.value;
    if(input.value.trim() === "") {
        return;
    }

    //Check Button
    const checkBtn=document.createElement('button');
    checkBtn.classList=("check");
    checkBtn.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    taskDiv.appendChild(checkBtn);

    //Delete Button
    const deleteBtn=document.createElement('button');
    deleteBtn.classList=("delete");
    deleteBtn.innerHTML = '<i class="fa-solid fa-circle-minus"></i>';
    taskDiv.appendChild(deleteBtn);

    //Append to list
    list.appendChild(taskDiv);

    //Clear search bar
    input.value="";
}

function deleteCheck(e){
    const item=e.target;
    //DELETE
    if(item.classList[0] === 'delete'){
        const todo=item.parentElement;
        todo.classList.add("fall");
        todo.addEventListener('transitionend', function(){
            todo.remove();
        });
    }

    //CHECK
    if(item.classList[0]=== 'check'){
        const toDo=item.parentElement;
        toDo.classList.toggle("completed");
    }
}

