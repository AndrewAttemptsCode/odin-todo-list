import { toDoList } from "../projectData/projectData";
import removeProjectButtonImage from "../../images/delete.svg";
import { loadMainContent } from "../mainContent/mainTemplate";
import { mainContentEventListeners } from "../mainContent/mainContentEventListeners";
import { updateTaskList } from "../mainContent/updateTasks";

export function updateProjectsList() {
    const projects = toDoList.getProjects();
    const projectContainer = document.querySelector(".project-container");
    projectContainer.innerHTML = "";

    projects.forEach((project, index) => {
        const projectItem = document.createElement("div");
        projectItem.classList.add("project-item");
        projectItem.textContent = project.name;
        projectItem.dataset.index = index;
        projectContainer.appendChild(projectItem);

        const hoverControls = document.createElement("div");
        hoverControls.classList.add("project-hover-controls");
        projectItem.appendChild(hoverControls);

        const removeProjectButton = document.createElement("img");
        removeProjectButton.src = removeProjectButtonImage;
        removeProjectButton.classList.add("remove-project-button");
        hoverControls.appendChild(removeProjectButton);

        removeProjectButton.addEventListener("click", (event) => {
            event.stopPropagation();
            const projectIndex = Number(projectItem.dataset.index);
            const projectName = toDoList.getProjects()[projectIndex].name;
            toDoList.removeProject(projectIndex);
            updateProjectsList();

            if (toDoList.selectedProject && toDoList.selectedProject.name === projectName) {
                toDoList.selectedProject = null;
                const mainContent = document.querySelector(".main-content");
                mainContent.innerHTML = "";
            }
        })

        projectItem.addEventListener("click", () => {
            toDoList.selectProject(project.name);
            loadMainContent();
            mainContentEventListeners();
            updateTaskList();
        })

    });
}

