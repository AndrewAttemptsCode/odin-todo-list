import "./style.css";
import { loadTemplate } from "./template";
import { loadHeaderContent } from "./headerContent";
import { loadSideBarContent } from "./sideBarContent";

document.addEventListener("DOMContentLoaded", () => {
    loadTemplate();
    loadHeaderContent();
    loadSideBarContent();
})