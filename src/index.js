import "./style.css";
import { loadTemplate } from "./template";
import { loadHeaderContent } from "./modules/headerContent/headerContent";
import { loadSideBarContent } from "./modules/sideBarContent/sideBarTemplate";
import { sideBarEventListeners } from "./modules/sideBarContent/sideBarEventListeners";
import { projectFormEventListeners } from "./modules/projectForm/projectFormEventListeners";
import { toDoList } from "./modules/projectData/projectData";
import { updateProjectsList } from "./modules/sideBarContent/updateProjects";

document.addEventListener("DOMContentLoaded", () => {
    loadTemplate();
    loadHeaderContent();
    loadSideBarContent();
    sideBarEventListeners();
    projectFormEventListeners();
    toDoList.loadFromLocalStorage();
    updateProjectsList();
})