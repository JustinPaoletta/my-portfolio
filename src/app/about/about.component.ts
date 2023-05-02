import { Component, inject, OnInit } from '@angular/core';
import { Post } from './about.model';
import { AboutService } from './about.service';

@Component({
    selector: 'app-about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
    posts: Post[];

    private aboutService: AboutService = inject(AboutService);

    ngOnInit(): void {
        this.posts = this.aboutService.getPosts();
    }
}
