// event listeners for
//  close dialog
//  submit data

export function taskFormEventListeners() {
    const taskDialog = document.querySelector(".task-dialog");
    const taskForm = document.querySelector(".task-form");
    const closeButton = document.querySelector(".task-menu-close");
    
    closeButton.addEventListener("click", () => {
        taskDialog.close();
        taskForm.reset();
    })
}