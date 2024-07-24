import "./style.css";
import { loadTemplate } from "./template";
import { loadHeaderContent } from "./modules/headerContent/headerContent";
import { loadSideBarContent } from "./modules/sideBarContent/loadSideBarContents";
import { sideBarEventListeners } from "./modules/sideBarContent/addSideBarEventListeners";
import { projectFormEventListeners } from "./modules/projectForm/addEventListeners";

document.addEventListener("DOMContentLoaded", () => {
    loadTemplate();
    loadHeaderContent();
    loadSideBarContent();
    sideBarEventListeners();
    projectFormEventListeners();
})