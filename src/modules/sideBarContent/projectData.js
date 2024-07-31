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
    }

    selectProject(projectName) {
        this.selectedProject = this.projects.find(project => project.name === projectName);
    }

    addTaskToSelectedProject(title, description, priority, dueDate) {
        if (this.selectedProject) {
            this.selectedProject.addTask(title, description, priority, dueDate);
        } else {
            console.log("No project selected");
        }
    }

    getProjects() {
        this.projects;
    }

    getTasksOfSelectedProject() {
        if (this.selectedProject) {
            return this.selectedProject.getTasks();
        } else {
            console.log("No project selected");
            return [];
        }
    }
}
