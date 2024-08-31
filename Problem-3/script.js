const tasks = [
    { id: 1, name: 'task 1', status: 'backlog' },
    { id: 2, name: 'task 2', status: 'backlog' },
    { id: 3, name: 'task 3', status: 'backlog' },
    { id: 4, name: 'task 4', status: 'todo' },
    { id: 5, name: 'task 5', status: 'todo' },
    { id: 6, name: 'task 6', status: 'todo' },
    { id: 7, name: 'task 7', status: 'ongoing' },
    { id: 8, name: 'task 8', status: 'ongoing' },
    { id: 9, name: 'task 9', status: 'done' },
    { id: 10, name: 'task 10', status: 'done' }
];

function renderTasks() {
    const backlogList = document.getElementById('backlog-list');
    const todoList = document.getElementById('todo-list');
    const ongoingList = document.getElementById('ongoing-list');
    const doneList = document.getElementById('done-list');

    // Clear existing tasks
    backlogList.innerHTML = '';
    todoList.innerHTML = '';
    ongoingList.innerHTML = '';
    doneList.innerHTML = '';

    tasks.forEach(task => {
        const li = document.createElement('li');
        li.innerHTML = `
            <span>${task.name}</span>
            <div>
                ${task.status !== 'backlog' ? `<button class="nav-button left" onclick="moveTask(${task.id}, 'left')">←</button>` : ''}
                ${task.status !== 'done' ? `<button class="nav-button right" onclick="moveTask(${task.id}, 'right')">→</button>` : ''}
            </div>
        `;
        
        switch (task.status) {
            case 'backlog':
                backlogList.appendChild(li);
                break;
            case 'todo':
                todoList.appendChild(li);
                break;
            case 'ongoing':
                ongoingList.appendChild(li);
                break;
            case 'done':
                doneList.appendChild(li);
                break;
        }
    });
}

// Function to move tasks
function moveTask(taskId, direction) {
    const task = tasks.find(t => t.id === taskId);
    if (!task) return;

    if (direction === 'left') {
        if (task.status === 'todo') task.status = 'backlog';
        else if (task.status === 'ongoing') task.status = 'todo';
        else if (task.status === 'done') task.status = 'ongoing';
    } else if (direction === 'right') {
        if (task.status === 'backlog') task.status = 'todo';
        else if (task.status === 'todo') task.status = 'ongoing';
        else if (task.status === 'ongoing') task.status = 'done';
    }

    renderTasks();
}

renderTasks();
