export function loadMainContent(projectName) {
    const mainContent = document.querySelector(".main-content");
    mainContent.innerHTML = "";

    const header = document.createElement("div");
    header.classList.add("main-header");
    mainContent.appendChild(header);

    const projectTitle = document.createElement("h1");
    projectTitle.classList.add("main-project-title");
    projectTitle.textContent = projectName;
    header.appendChild(projectTitle);

    const addTaskContainer = document.createElement("div");
    addTaskContainer.classList.add("add-task-container");
    addTaskContainer.title = "Add new task";
    header.appendChild(addTaskContainer);
    
    const addButtonText = document.createElement("p");
    addButtonText.classList.add("add-task-button-text");
    addButtonText.textContent = "Add Task";
    addTaskContainer.appendChild(addButtonText);

    const addButton = document.createElement("button");
    addButton.classList.add("add-task-button");
    addButton.textContent = "+";
    addTaskContainer.appendChild(addButton);
}
