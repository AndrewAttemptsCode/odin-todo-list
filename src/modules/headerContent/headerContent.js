import checklistImage from "../../images/checklist.svg";

export function loadHeaderContent() {
    const header = document.querySelector(".header");

    const logoContainer = document.createElement("div");
    logoContainer.classList.add("logo-container");
    header.appendChild(logoContainer);
    
    const logoImage = document.createElement("img");
    logoImage.classList.add("logo-image");
    logoImage.src = checklistImage;
    logoImage.alt = "checklist image";
    logoContainer.appendChild(logoImage);

    const logoText = document.createElement("h1");
    logoText.classList.add("logo-text");
    logoText.textContent = "Project Planner";
    logoContainer.appendChild(logoText);
}