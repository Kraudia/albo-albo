import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'favourites'
})
export class FavouritesPipe implements PipeTransform {
  transform(value: number): string {
    if (value < 1) {
      return 'nikt nie dodał do ulubionych';
    } else if (value === 1) {
      return value + ' osoba dodała do ulubionych';
    } else if (1 < value && value < 5) {
      return value + ' osoby dodały do ulubionych';
    } else {
      return value + ' osób dodało do ulubionych';
    }
  }
}
