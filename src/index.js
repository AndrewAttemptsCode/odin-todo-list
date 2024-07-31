import "./style.css";
import { loadTemplate } from "./template";
import { loadHeaderContent } from "./modules/headerContent/headerContent";
import { loadSideBarContent } from "./modules/sideBarContent/sideBarTemplate";
import { sideBarEventListeners } from "./modules/sideBarContent/sideBarEventListeners";
import { projectFormEventListeners } from "./modules/projectForm/projectFormEventListeners";

document.addEventListener("DOMContentLoaded", () => {
    loadTemplate();
    loadHeaderContent();
    loadSideBarContent();
    sideBarEventListeners();
    projectFormEventListeners();
})