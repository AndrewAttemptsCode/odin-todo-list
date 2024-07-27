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
    form.classList.add("project-form");
    form.method = "dialog";
    dialog.appendChild(form);

    const labelName = document.createElement("label");
    labelName.textContent = "Task Name: ";
    form.appendChild(labelName);

    const inputName = document.createElement("input");
    inputName.classList.add = "project-name";
    inputName.type = "text";
    inputName.name = "taskName";
    inputName.required = true;
    inputName.maxLength = 20;
    form.appendChild(inputName);

    const buttonSubmit = document.createElement("button");
    buttonSubmit.type = "submit";
    buttonSubmit.textContent = "Add task";
    form.appendChild(buttonSubmit);

}