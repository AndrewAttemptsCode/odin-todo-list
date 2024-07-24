import { updateProjects} from "./updateProjects";

let projectList = [];

export function addProject(projectName) {
    projectList.push({name: projectName});
    updateProjects();
}

export function getProjects() {
    return projectList;
}