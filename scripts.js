const tasks = [];
function addTask(){
    const newTask= document.getElementById("newTask").value;
    if (newTask.trim() !== ""){
        tasks.push(newTask);
        document.getElementById("newTask").value = "";
        const tasksList=document.getElementById("tasksList");
        tasksList.innerHTML = "";
    }
}

function listTasksFor(){
    const tasksList=document.getElementById("tasksList");
    tasksList.innerHTML = "";
    for (let i = 0; i < tasks.length; i++){
        const taskItem = document.createElement("li");
        taskItem.textContent = tasks[i]
        tasksList.appendChild(taskItem)
    }

}

function listTasksWhile(){
    const tasksList =document.getElementById("tasksList");
    tasksList.innerHTML="";
    let i = 0;

    while (i < tasks.length) {
    const taskItem = document.createElement("li")
    taskItem.textContent = tasks[i];
    tasksList.appendChild(taskItem)
    i++;
    }
}

function listTasksDoWhile() {
    const tasksList = document.getElementById("tasksList");
    tasksList.innerHTML = "";

    let i = 0;
    if (tasks.length > 0) {
        do {
            const taskItem =document.createElement("li");
            taskItem.textContent = tasks[i];
            tasksList.appendChild(taskItem);
            i++;
        }
        while (i < tasks.length);
    }
}

// Get the input element and form element

// Add an event listener for the Enter key press
input.addEventListener("keyup", addTask())
    if (event.key === "Enter") {
        // Prevent the default form submission
        event.preventDefault();
        // Call your custom function here
        addTask();
    }
