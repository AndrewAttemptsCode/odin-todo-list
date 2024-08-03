import { toDoList } from "../projectData/projectData";

export function loadMainContent() {
    const mainContent = document.querySelector(".main-content");
    mainContent.innerHTML = "";
    
    const mainHeader = document.createElement("div");
    mainHeader.classList.add("main-header");
    mainContent.appendChild(mainHeader);

    const projectTitle = document.createElement("h1");
    projectTitle.classList.add("main-project-title");
    projectTitle.textContent = toDoList.selectedProject.name;
    mainHeader.appendChild(projectTitle);

    const addTaskContainer = document.createElement("div");
    addTaskContainer.classList.add("add-task-container");
    addTaskContainer.title = "Add new task";
    mainHeader.appendChild(addTaskContainer);
    
    const addButtonText = document.createElement("p");
    addButtonText.classList.add("add-task-button-text");
    addButtonText.textContent = "Add Task";
    addTaskContainer.appendChild(addButtonText);

    const addButton = document.createElement("button");
    addButton.classList.add("add-task-button");
    addButton.textContent = "+";
    addTaskContainer.appendChild(addButton);
}