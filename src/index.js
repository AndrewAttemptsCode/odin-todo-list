import "./style.css";
import { loadTemplate } from "./template";
import { loadHeaderContent } from "./headerContent";
import { loadSideBarContent } from "./sideBarContent";
import { loadProjectForm } from "./projectForm";

document.addEventListener("DOMContentLoaded", () => {
    loadTemplate();
    loadHeaderContent();
    loadSideBarContent();
    loadProjectForm();
})