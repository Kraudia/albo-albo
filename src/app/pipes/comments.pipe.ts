import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'comments'
})
export class CommentsPipe implements PipeTransform {
  transform(value: number): string {
    if (value < 1) {
      return 'brak komentarzy';
    } else if (value === 1) {
      return value + ' komentarz';
    } else if (1 < value && value < 5) {
      return value + ' komentarze';
    } else {
      return value + ' komentarzy';
    }
  }
}
