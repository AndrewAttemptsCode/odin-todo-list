import { toDoList } from "../projectData/projectData";

export function loadMainContent() {
    const mainContent = document.querySelector(".main-content");
    mainContent.innerHTML = "";
    
    const mainHeader = document.createElement("div");
    mainHeader.classList.add("main-header");
    mainContent.appendChild(mainHeader);

    const projectTitle = document.createElement("h1");
    projectTitle.classList.add("main-project-title");
    projectTitle.textContent = toDoList.selectedProject.name; // TypeError: Cannot read properties of undefined (reading 'name')
    mainHeader.appendChild(projectTitle);

    // finish the template
}