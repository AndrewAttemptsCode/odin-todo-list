export function loadTemplate() {
    const toDoApp = document.querySelector("#todo-app");

    const header = document.createElement("div");
    header.classList.add("header");
    toDoApp.appendChild(header);

    const sideBar = document.createElement("div");
    sideBar.classList.add("side-bar");
    toDoApp.appendChild(sideBar);

    const mainContent = document.createElement("div");
    mainContent.classList.add("main-content");
    toDoApp.appendChild(mainContent);
}