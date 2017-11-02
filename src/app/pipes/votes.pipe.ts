import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'votes'
})
export class VotesPipe implements PipeTransform {
  transform(value: number): string {
    if (value < 1) {
      return 'brak głosów';
    } else if (value === 1) {
      return value + ' głos';
    } else if (1 < value && value < 5) {
      return value + ' głosy';
    } else {
      return value + ' głosów';
    }
  }
}
