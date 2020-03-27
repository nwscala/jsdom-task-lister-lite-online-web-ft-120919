document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const form = document.getElementById('create-task-form');
  const textbox = document.getElementById('new-task-description');
  const tasksList = document.getElementById('tasks');
  
  
  

  form.addEventListener('submit', function(event) {
    event.preventDefault();
    const newTask = document.createElement('li');
    newTask.innerHTML = textbox.value;
    tasksList.appendChild(newTask);
  });

});
