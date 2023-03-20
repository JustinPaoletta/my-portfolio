import { Project } from "./projects.model";

export class ProjectsServiceMock {
    getTodos(): Project[] {
        return [];
    }

    getInProgress(): Project[] {
        return [];
    }

    getDone(): Project[] {
        return [];
    }
}
