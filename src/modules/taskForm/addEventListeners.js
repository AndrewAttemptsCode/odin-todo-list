export function taskFormEventListeners() {
    const closeButton = document.querySelector(".task-dialog .menu-close");
    const dialog = document.querySelector(".task-dialog");

    closeButton.addEventListener("click", () => {
        dialog.close();
    });
}