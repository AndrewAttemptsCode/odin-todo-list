import { getProjects } from "./projectData";

export function updateProjects() {
    const projectContainer = document.querySelector(".project-container");
    projectContainer.innerHTML = "";

    const projects = getProjects();
    projects.forEach(project => {
        const projectItem = document.createElement("div");
        projectItem.classList.add("project-item");
        projectItem.textContent = project.name;
        projectContainer.appendChild(projectItem);
    });
}