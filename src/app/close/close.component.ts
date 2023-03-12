import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-close',
    templateUrl: './close.component.html',
    styleUrls: ['./close.component.scss'],
})
export class CloseComponent {
    @Input() download: any;
}
