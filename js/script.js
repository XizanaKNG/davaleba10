document.addEventListener("DOMContentLoaded", function() {
  const addTaskButton = document.getElementById('addTaskButton');
  const taskList = document.getElementById('taskList');
  const taskCountSpan = document.getElementById('taskCount');
  const newTaskInput = document.getElementById('newTaskInput');
  let taskCount = 0;

  addTaskButton.addEventListener('click', function() {
    addTask();
  });

  function addTask() {
    const taskText = newTaskInput.value.trim();

    if (taskText !== '') {
      taskCount++;
      const taskDiv = document.createElement('div');
      taskDiv.classList.add('task');

      const taskTextNode = document.createTextNode(taskText);
      taskDiv.appendChild(taskTextNode);

      const taskActionsDiv = document.createElement('div');
      taskActionsDiv.classList.add('task-actions');

      const completeButton = document.createElement('button');
      completeButton.classList.add('complete');
      completeButton.innerHTML = '<i class="fas fa-check"></i>';
      completeButton.addEventListener('click', function() {
        completeTask(taskDiv);
      });
      taskActionsDiv.appendChild(completeButton);

      const deleteButton = document.createElement('button');
      deleteButton.classList.add('delete');
      deleteButton.innerHTML = '<i class="fas fa-trash"></i>';
      deleteButton.addEventListener('click', function() {
        deleteTask(taskDiv);
      });
      taskActionsDiv.appendChild(deleteButton);

      taskDiv.appendChild(taskActionsDiv);

      taskList.appendChild(taskDiv);
      taskCountSpan.textContent = taskCount;

      newTaskInput.value = '';
    }
  }

  function completeTask(taskDiv) {
    if (taskDiv.classList.contains('completed')) {
      taskCount++;
    } else {
      taskCount--;
    }
    taskCountSpan.textContent = taskCount;
    taskDiv.classList.toggle('completed');
  }

  function deleteTask(taskDiv) {
    taskList.removeChild(taskDiv);
    if (!taskDiv.classList.contains('completed')) {
      taskCount--;
      taskCountSpan.textContent = taskCount;
    }
  }
});