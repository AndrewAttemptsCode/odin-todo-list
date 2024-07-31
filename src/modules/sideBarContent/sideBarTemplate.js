export function loadSideBarContent() {
    const sideBar = document.querySelector(".side-bar");

    const controlsContainer = document.createElement("div");
    controlsContainer.classList.add("sidebar-controls-container");
    sideBar.appendChild(controlsContainer);

    const title = document.createElement("h1");
    title.classList.add("sidebar-title");
    title.textContent = "Projects";
    controlsContainer.appendChild(title);

    const addButton = document.createElement("button");
    addButton.classList.add("add-project-button");
    addButton.textContent = "+";
    addButton.title = "Add new project";
    controlsContainer.appendChild(addButton);

    const projectContainer = document.createElement("div");
    projectContainer.classList.add("project-container");
    sideBar.appendChild(projectContainer);
}