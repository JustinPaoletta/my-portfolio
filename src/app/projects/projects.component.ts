import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

import { Project } from './projects.model';
import { ProjectsService } from './projects.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
    selector: 'app-projects',
    templateUrl: './projects.component.html',
    styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit, OnDestroy {
    todo: Project[];
    inProgress: Project[];
    done: Project[];

    private changesMade: boolean = false;
    private _snackBar: MatSnackBar = inject(MatSnackBar);
    private projectsService = inject(ProjectsService);

    ngOnInit(): void {
        this.todo = this.projectsService.getTodos();
        this.inProgress = this.projectsService.getInProgress();
        this.done = this.projectsService.getDone();
    }

    ngOnDestroy(): void {
        this._snackBar.dismiss();
    }

    drop(event: CdkDragDrop<Project[]>): void {
        if (event.previousContainer === event.container) {
            moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
        } else {
            transferArrayItem(
                event.previousContainer.data,
                event.container.data,
                event.previousIndex,
                event.currentIndex
            );
        }

        this.unAuthorizedNotification();
    }

    openProjectInNewTab(link: string): void {
        if (!!link) {
            window.open(link);
        }
    }

    unAuthorizedNotification($event?: Event): void {
        if (!!$event) {
            $event.stopPropagation();
        }

        if (!this.changesMade) {
            this._snackBar.open('Changes to this board are unauthorized, no changes will be saved.', 'DISMISS');
            this.changesMade = true;
        }
    }
}
