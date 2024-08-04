export function loadTaskForm() {
    const toDoApp = document.querySelector("#todo-app");

    const taskDialog = document.createElement("dialog");
    taskDialog.classList.add("task-dialog");
    toDoApp.appendChild(taskDialog);

    const menuBar = document.createElement("div");
    menuBar.classList.add("menu-bar");
    taskDialog.appendChild(menuBar);

    const menuTitle = document.createElement("p");
    menuTitle.textContent = "Create new Task...";
    menuBar.appendChild(menuTitle);

    const close = document.createElement("button");
    close.classList.add("task-menu-close");
    close.textContent = "x";
    close.title = "Close";
    menuBar.appendChild(close);

    const taskForm = document.createElement("form");
    taskForm.classList.add("task-form");
    taskForm.method = "dialog";
    taskDialog.appendChild(taskForm);

    // Form Fields

    const labelTitle = document.createElement("label");
    labelTitle.setAttribute("for", "taskTitle");
    labelTitle.textContent = "Title:";
    taskForm.appendChild(labelTitle);

    const taskTitle = document.createElement("input");
    taskTitle.id = "taskTitle";
    taskTitle.classList.add("task-form-input");
    taskTitle.type = "text";
    taskTitle.name = "taskTitle";
    taskTitle.required = true;
    taskTitle.maxLength = 20;
    taskForm.appendChild(taskTitle);

    const labelDescription = document.createElement("label");
    labelDescription.setAttribute("for", "taskDescription");
    labelDescription.textContent = "Description:"
    taskForm.appendChild(labelDescription);

    const taskDescription = document.createElement("textarea");
    taskDescription.id = "taskDescription";
    taskDescription.classList.add("task-form-description");
    taskDescription.name = "taskDescription";
    taskDescription.required = false;
    taskDescription.maxLength = 100;
    taskForm.appendChild(taskDescription);

    const labelPriority = document.createElement("label");
    labelPriority.setAttribute("for", "taskPriority");
    labelPriority.textContent = "Priority:";
    taskForm.appendChild(labelPriority);

    const taskPriority = document.createElement("select");
    taskPriority.id = "taskPriority";
    taskPriority.classList.add("task-form-input");
    taskPriority.name = "taskPriority";
    taskPriority.required = true;
    taskForm.appendChild(taskPriority);

    const lowPriority = document.createElement("option");
    lowPriority.textContent = "Low";
    taskPriority.appendChild(lowPriority);

    const mediumPriority = document.createElement("option");
    mediumPriority.textContent = "Medium";
    taskPriority.appendChild(mediumPriority);

    const highPriority = document.createElement("option");
    highPriority.textContent = "High";
    taskPriority.appendChild(highPriority);

    const labelDate = document.createElement("label");
    labelDate.setAttribute("for", "taskDueDate");
    labelDate.textContent = "Due Date:";
    taskForm.appendChild(labelDate);

    const taskDueDate = document.createElement("input");
    taskDueDate.type = "date";
    taskDueDate.id = "taskDueDate";
    taskDueDate.classList.add("task-form-input");
    taskDueDate.name = "taskDueDate";
    taskDueDate.required = true;
    taskForm.appendChild(taskDueDate);

    const taskButtonSubmit = document.createElement("button");
    taskButtonSubmit.type = "submit";
    taskButtonSubmit.classList.add("task-submit-button");
    taskButtonSubmit.textContent = "Add task";
    taskForm.appendChild(taskButtonSubmit);

}
