import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'favouriteQuestions'
})
export class FavouriteQuestionsPipe implements PipeTransform {

  transform(value: number): string {
    if (value === 1) {
      return value + ' ulubione pytanie';
    } else if (1 < value && value < 5) {
      return value + ' ulubione pytania';
    } else {
      return value + ' ulubionych pytań';
    }
  }
}

