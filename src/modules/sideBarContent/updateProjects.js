import { getProjects, removeProject } from "./projectData";
import deleteImage from "../../images/delete.svg";
import { loadMainContent } from "../mainContent/loadMainContents";
import { mainEventListeners } from "../mainContent/addEventListeners";

export function updateProjects() {
    const projectContainer = document.querySelector(".project-container");
    projectContainer.innerHTML = "";

    const projects = getProjects();

    let currentSelectedProject = null;

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

        projectItem.addEventListener("click", () => {
            currentSelectedProject ? currentSelectedProject.classList.remove("selected") : null;
            projectItem.classList.add("selected");
            currentSelectedProject = projectItem;

            loadMainContent(project.name);
            mainEventListeners();
        })

    });
}