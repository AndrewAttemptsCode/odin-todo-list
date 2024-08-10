import { mainContentEventListeners } from "../mainContent/mainContentEventListeners";
import { loadMainContent } from "../mainContent/mainTemplate";
import { updateTaskList } from "../mainContent/updateTasks";

// Task Class
export class Task {
    constructor(title, description, priority, dueDate) {
        this.title = title;
        this.description = description;
        this.priority = priority;
        this.dueDate = dueDate;
        this.completed = false;
    }

    toggleComplete() {
        this.completed = !this.completed;
    }

    edit(title, description, priority, dueDate) {
        this.title = title;
        this.description = description;
        this.priority = priority;
        this.dueDate = dueDate;
    }
}

// Project Class
export class Project {
    constructor(name) {
        this.name = name;
        this.tasks = [];
    }

    addTask(title, description, priority, dueDate) {
        const task = new Task(title, description, priority, dueDate);
        this.tasks.push(task);
    }

    editTask(taskIndex, title, description, priority, dueDate) {
        this.tasks[taskIndex].edit(title, description, priority, dueDate);
    }

    getTasks() {
        return this.tasks;
    }
}

// ToDoList Class

export class ToDoList {
    constructor() {
        this.projects = [];
        this.selectedProject = null;
    }

    addProject(projectName) {
        const project = new Project(projectName);
        this.projects.push(project);
        this.saveToLocalStorage();
    }

    removeProject(projectIndex) {
        this.projects.splice(projectIndex, 1);
        this.saveToLocalStorage();
    }

    removeTask(taskIndex) {
        this.selectedProject.tasks.splice(taskIndex, 1);
        this.saveToLocalStorage();
    }

    selectProject(projectName) {
        this.selectedProject = this.projects.find(project => project.name === projectName);
        this.saveToLocalStorage();
    }

    addTaskToSelectedProject(title, description, priority, dueDate) {
        if (this.selectedProject) {
            this.selectedProject.addTask(title, description, priority, dueDate);
            this.saveToLocalStorage();
        } else {
            console.log("No project selected");
        }
    }

    editTaskOfSelectedProject(taskIndex, title, description, priority, dueDate) {
        if (this.selectedProject) {
            this.selectedProject.editTask(taskIndex, title, description, priority, dueDate);
            this.saveToLocalStorage();
        } else
            console.log("No project selected");
    }

    getProjects() {
        return this.projects;
    }

    getTasksOfSelectedProject() {
        if (this.selectedProject) {
            return this.selectedProject.getTasks();
        } else {
            console.log("No project selected");
            return [];
        }
    }

    saveToLocalStorage() {
        const data = {
            projects: this.projects,
            selectedProject: this.selectedProject ? this.selectedProject.name : null,
        };
        localStorage.setItem("toDoList", JSON.stringify(data));
    }

    loadFromLocalStorage() {
        const data = localStorage.getItem("toDoList");
        if (data) {
            const parseData = JSON.parse(data);
            this.projects = [];

            parseData.projects.forEach(projectData => {
                const project = new Project(projectData.name);

                projectData.tasks.forEach(taskData => {
                    const task = new Task(
                        taskData.title,
                        taskData.description,
                        taskData.priority,
                        taskData.dueDate
                    );
                    task.completed = taskData.completed;
                    project.tasks.push(task);
                });

                this.projects.push(project);
            });

            if (parseData.selectedProject) {
                this.selectedProject = this.projects.find(project => project.name === parseData.selectedProject);
                
                if (this.selectedProject) {
                    loadMainContent();
                    updateTaskList();
                    mainContentEventListeners();
                }
            }
        }
    }
     
}

export const toDoList = new ToDoList();