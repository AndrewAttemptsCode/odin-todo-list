export function projectFormEventListeners() {
    const closeButton = document.querySelector(".menu-close");
    const dialog = document.querySelector(".project-dialog");

    closeButton.addEventListener("click", () => {
        dialog.close();
    });

    const projectForm = document.querySelector(".project-form");

    projectForm.addEventListener("submit", (event) => {
        event.preventDefault();
        // add project to projectList array
    })
}