var input = document.getElementById("taskInput");
// Execute a function when the user presses a key on the keyboard
input.addEventListener("keypress", function(event) {
    // If the user presses the "Enter" key on the keyboard
    if (event.key === "Enter") {
      document.getElementById("addTaskButton").click();
    }
  }); 

function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task.");
        return;
    }

    const listItem = document.createElement('li');
    listItem.textContent = taskText;

    // Toggle completion on click
    listItem.addEventListener('click', () => {
        listItem.classList.toggle('completed');
    });

    // Add a delete button for each task
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.className = 'delete-btn';
    deleteButton.onclick = () => {
        taskList.removeChild(listItem);
    };

    listItem.appendChild(deleteButton);
    taskList.appendChild(listItem);

    // Clear the input field
    taskInput.value = "";
}
