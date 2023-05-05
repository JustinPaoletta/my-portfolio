import { Injectable } from '@angular/core';

import { Project } from './projects.model';

@Injectable({
    providedIn: 'root',
})
export class ProjectsService {
    private todos: Project[];
    private inProgress: Project[];
    private done: Project[];


    
    constructor() {
        this.todos = [
            {
                name: 'Stoic - A Journey of Introspection',
                link: 'https://github.com/JustinPaoletta/',
            },
        ];
        this.inProgress = [
            {
                name: 'NestJs Auth - JWT User Login System',
                link: 'https://github.com/JustinPaoletta/JWT-Auth',
            },
            {
                name: 'CronJobs - Automating & Scheduling Tasks',
                link: 'https://github.com/JustinPaoletta/',
            },
            {
                name: 'Pokemon World - Catch Pokemon with Google Maps',
                link: 'https://github.com/JustinPaoletta/Pokemon-World',
            },
            {
                name: 'Chrome Extension - SWN - Sports Weather News',
                link: 'https://github.com/JustinPaoletta/',
            },
            {
                name: 'Web Scraping - Grab data publicly available on the web without an API',
                link: 'https://github.com/JustinPaoletta/',
            }
        ];
        this.done = [
            {
                name: 'jp-health-measurements - npm package - Calculating Health Measurements Made Easy',
                link: 'https://github.com/JustinPaoletta/jp-health-measurements',
            },
            {
                name: 'Portfolio - Software Engineering Portfolio',
                link: 'https://github.com/JustinPaoletta/my-portfolio',
            },
        ];
    }

    getTodos(): Project[] {
        return this.todos;
    }

    getInProgress(): Project[] {
        return this.inProgress;
    }

    getDone(): Project[] {
        return this.done;
    }
}