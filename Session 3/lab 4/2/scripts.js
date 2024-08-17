function addTask() {
    const input = document.getElementById('taskInput');
    const newTask = input.value.trim();

    if (newTask) {
        const li = document.createElement('li');

        const taskText = document.createElement('span');
        taskText.className = 'task-name';
        taskText.textContent = newTask;
        li.appendChild(taskText);

        const doneBtn = document.createElement('span');
        doneBtn.innerHTML = '&#10003;';
        doneBtn.className = 'action-btn done-btn';
        doneBtn.onclick = function() {
            taskText.classList.toggle('done-task');
        };
        li.appendChild(doneBtn);

        const deleteBtn = document.createElement('span');
        deleteBtn.innerHTML = '&#10005;';
        deleteBtn.className = 'action-btn delete-btn';
        deleteBtn.onclick = function() {
            li.remove();
        };
        li.appendChild(deleteBtn);

        document.getElementById('tasksList').appendChild(li);
        input.value = '';
    } else {
        alert("Please enter a task name.");
    }
}