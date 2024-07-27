export function loadTaskForm() {
    const toDoApp = document.querySelector("#todo-app");

    const dialog = document.createElement("dialog");
    dialog.classList.add("task-dialog");
    toDoApp.appendChild(dialog);

    const menuBar = document.createElement("div");
    menuBar.classList.add("menu-bar");
    dialog.appendChild(menuBar);

    const menuTitle = document.createElement("p");
    menuTitle.textContent = "Create new Task...";
    menuBar.appendChild(menuTitle);

    const close = document.createElement("button");
    close.classList.add("menu-close");
    close.textContent = "x";
    close.title = "Close";
    menuBar.appendChild(close);

    const form = document.createElement("form");
    form.classList.add("task-form");
    form.method = "dialog";
    dialog.appendChild(form);

    // Form Fields

    const labelTitle = document.createElement("label");
    labelTitle.setAttribute("for", "taskTitle");
    labelTitle.textContent = "Title:";
    form.appendChild(labelTitle);

    const taskTitle = document.createElement("input");
    taskTitle.id = "taskTitle";
    taskTitle.classList.add("task-form-input");
    taskTitle.type = "text";
    taskTitle.name = "taskTitle";
    taskTitle.required = true;
    taskTitle.maxLength = 20;
    form.appendChild(taskTitle);

    const labelDescription = document.createElement("label");
    labelDescription.setAttribute("for", "taskDescription");
    labelDescription.textContent = "Description:"
    form.appendChild(labelDescription);

    const taskDescription = document.createElement("textarea");
    taskDescription.id = "taskDescription";
    taskDescription.classList.add("task-description");
    taskDescription.name = "taskDescription";
    taskDescription.required = false;
    taskDescription.maxLength = 100;
    form.appendChild(taskDescription);

    const labelPriority = document.createElement("label");
    labelPriority.setAttribute("for", "taskPriority");
    labelPriority.textContent = "Priority:";
    form.appendChild(labelPriority);

    const taskPriority = document.createElement("select");
    taskPriority.id = "taskPriority";
    taskPriority.classList.add("task-form-input");
    taskPriority.name = "taskPriority";
    taskPriority.required = true;
    form.appendChild(taskPriority);

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
    form.appendChild(labelDate);

    const taskDueDate = document.createElement("input");
    taskDueDate.type = "date";
    taskDueDate.id = "taskDueDate";
    taskDueDate.classList.add("task-form-input");
    taskDueDate.name = "taskDueDate";
    form.appendChild(taskDueDate);

    const buttonSubmit = document.createElement("button");
    buttonSubmit.type = "submit";
    buttonSubmit.textContent = "Add task";
    form.appendChild(buttonSubmit);

}