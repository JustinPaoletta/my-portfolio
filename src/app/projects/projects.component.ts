import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { HttpClient } from "@angular/common/http";


@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  constructor(private http: HttpClient) {

  }

  ngOnInit(): void {
    this.http.get("https://geolocation-db.com/json/").subscribe((r) => console.log(r))

    window.navigator.geolocation.getCurrentPosition((pos) => {
      let isValidLat = false;
      let isValidLong = false;

      if (pos.coords.latitude > 28.57255 && pos.coords.latitude < 28.57267) {
        isValidLat = true;
      }

      if (pos.coords.longitude < -81.3060 && pos.coords.longitude > -81.30606) {
        isValidLong = true;
      }

      console.log(pos.coords.latitude)
      console.log(isValidLat)
      console.log(pos.coords.longitude)
      console.log(isValidLong)
      console.log(isValidLat && isValidLong)
      
    });
  }

  todo = ['Stoic'];

  inProgress = ['NestJs Auth', 'Portfolio', 'CronJobs'];

  done = ['Pokemon World'];

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }
}
