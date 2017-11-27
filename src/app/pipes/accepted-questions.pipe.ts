import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'acceptedQuestions'
})
export class AcceptedQuestionsPipe implements PipeTransform {

  transform(value: number): string {
    if (0 < value && value < 5) {
      return value + ' zatwiedzone';
    } else {
      return value + ' zatwierdzonych';
    }
  }
}
