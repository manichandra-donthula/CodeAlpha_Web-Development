function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();

    if (taskText === '') return;

    const todoList = document.getElementById('todoList');

    const li = document.createElement('li');
    li.innerText = taskText;

    const completeBtn = document.createElement('button');
    completeBtn.innerText = 'Complete';
    completeBtn.className = 'remove-btn';
    completeBtn.onclick = function () {
        completeTask(this.parentNode);
    };

    li.appendChild(completeBtn);

    todoList.appendChild(li);

    taskInput.value = '';
}

function completeTask(task) {
    const todoList = document.getElementById('todoList');
    const completedList = document.getElementById('completedList');

    task.classList.add('completed');
    task.lastChild.innerText = 'Remove';
    task.lastChild.onclick = function () {
        removeTask(this.parentNode);
    };

    completedList.appendChild(task);
}

function removeTask(task) {
    task.remove();
}
