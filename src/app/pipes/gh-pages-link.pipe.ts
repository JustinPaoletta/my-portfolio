import { Pipe, PipeTransform, isDevMode } from '@angular/core';

@Pipe({
    name: 'ghPagesLink',
    pure: false,
})
export class GhPagesLinkPipe implements PipeTransform {
    transform(value: string): string {
        if (isDevMode()) {
            return value;
        }

        return `./assets${value.split('assets')[1]}`;
    }
}
