import { getProjects, removeProject } from "./projectData";
import deleteImage from "../../images/delete.svg";

export function updateProjects() {
    const projectContainer = document.querySelector(".project-container");
    projectContainer.innerHTML = "";

    const projects = getProjects();
    projects.forEach((project, index) => {
        const projectItem = document.createElement("div");
        projectItem.classList.add("project-item");
        projectItem.textContent = project.name;
        projectContainer.appendChild(projectItem);

        const hoverControls = document.createElement("div");
        hoverControls.classList.add("project-hover-controls");
        projectItem.appendChild(hoverControls);

        const projectDelete = document.createElement("img");
        projectDelete.src = deleteImage;
        projectDelete.classList.add("delete-project");
        projectDelete.title = "Delete";
        hoverControls.appendChild(projectDelete);

        projectDelete.addEventListener("click", () => {
            removeProject(index);
        });

    });
}