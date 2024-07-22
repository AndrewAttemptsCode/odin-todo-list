export function loadHeaderContent() {
    const header = document.querySelector(".header");

    const logoText = document.createElement("div");
    logoText.classList.add("logo-text");
    logoText.textContent = "Project Planner";
    header.appendChild(logoText);
}