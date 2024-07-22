import "./style.css";
import { loadTemplate } from "./template";
import { loadHeaderContent } from "./headerContent";

document.addEventListener("DOMContentLoaded", () => {
    loadTemplate();
    loadHeaderContent();
})