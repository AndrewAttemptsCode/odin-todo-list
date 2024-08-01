import { toDoList } from "../projectData/projectData";
import removeProjectButtonImage from "../../images/delete.svg";

export function updateProjectsList() {
    const projects = toDoList.getProjects();
    const projectContainer = document.querySelector(".project-container");
    projectContainer.innerHTML = "";

    projects.forEach((project, index) => {
        const projectItem = document.createElement("div");
        projectItem.classList.add("project-item");
        projectItem.textContent = project.name;
        projectContainer.appendChild(projectItem);

        const hoverControls = document.createElement("div");
        hoverControls.classList.add("project-hover-controls");
        projectItem.appendChild(hoverControls);

        const removeProjectButton = document.createElement("img");
        removeProjectButton.src = removeProjectButtonImage;
        removeProjectButton.classList.add("remove-project-button");
        hoverControls.appendChild(removeProjectButton);

        removeProjectButton.addEventListener("click", () => {
            toDoList.removeProject(index);
            updateProjectsList();
        })

        // When project is clicked on, it loads the main content template

    });
}

