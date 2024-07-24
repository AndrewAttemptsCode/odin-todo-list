import { getProjects } from "./projectData";
import deleteImage from "../../images/delete.svg";

export function updateProjects() {
    const projectContainer = document.querySelector(".project-container");
    projectContainer.innerHTML = "";

    const projects = getProjects();
    projects.forEach(project => {
        const projectItem = document.createElement("div");
        projectItem.classList.add("project-item");
        projectItem.textContent = project.name;
        projectContainer.appendChild(projectItem);

        const hoverControls = document.createElement("div");
        hoverControls.classList.add("project-hover-controls");
        projectItem.appendChild(hoverControls);

        const projectDeleteImage = document.createElement("img");
        projectDeleteImage.src = deleteImage;
        projectDeleteImage.title = "Delete";
        hoverControls.appendChild(projectDeleteImage);
    });
}