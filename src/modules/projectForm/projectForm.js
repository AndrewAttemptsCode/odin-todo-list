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

    const projectForm = document.createElement("form");
    projectForm.classList.add("project-form");
    projectForm.method = "dialog";
    dialog.appendChild(projectForm);

    const labelProjectName = document.createElement("label");
    labelProjectName.textContent = "Project Name: ";
    projectForm.appendChild(labelProjectName);

    const inputProjectName = document.createElement("input");
    inputProjectName.classList.add("project-name");
    inputProjectName.type = "text";
    inputProjectName.name = "projectName";
    inputProjectName.required = true;
    inputProjectName.maxLength = 20;
    projectForm.appendChild(inputProjectName);

    const buttonSubmit = document.createElement("button");
    buttonSubmit.type = "submit";
    buttonSubmit.classList.add("project-submit-button");
    buttonSubmit.textContent = "Add project";
    projectForm.appendChild(buttonSubmit);

}