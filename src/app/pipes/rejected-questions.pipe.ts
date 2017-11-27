import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'rejectedQuestions'
})
export class RejectedQuestionsPipe implements PipeTransform {

  transform(value: number): string {
    if (0 < value && value < 5) {
      return value + ' odrzucone';
    } else {
      return value + ' odrzuconych';
    }
  }
}
