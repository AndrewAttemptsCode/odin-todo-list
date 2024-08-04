export function loadProjectForm() {
    const toDoApp = document.querySelector("#todo-app");

    const dialog = document.createElement("dialog");
    dialog.classList.add("project-dialog");
    toDoApp.appendChild(dialog);

    const menuBar = document.createElement("div");
    menuBar.classList.add("menu-bar");
    dialog.appendChild(menuBar);

    const menuTitle = document.createElement("p");
    menuTitle.textContent = "Create new Project...";
    menuBar.appendChild(menuTitle);

    const close = document.createElement("button");
    close.classList.add("project-menu-close");
    close.textContent = "x";
    close.title = "Close";
    menuBar.appendChild(close);

    const form = document.createElement("form");
    form.classList.add("project-form");
    form.method = "dialog";
    dialog.appendChild(form);

    const labelProjectName = document.createElement("label");
    labelProjectName.textContent = "Project Name: ";
    form.appendChild(labelProjectName);

    const inputProjectName = document.createElement("input");
    inputProjectName.classList.add("project-name");
    inputProjectName.type = "text";
    inputProjectName.name = "projectName";
    inputProjectName.required = true;
    inputProjectName.maxLength = 20;
    form.appendChild(inputProjectName);

    const buttonSubmit = document.createElement("button");
    buttonSubmit.type = "submit";
    buttonSubmit.classList.add(".project-submit-button");
    buttonSubmit.textContent = "Add project";
    form.appendChild(buttonSubmit);

}