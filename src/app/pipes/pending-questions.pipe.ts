import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pendingQuestions'
})
export class PendingQuestionsPipe implements PipeTransform {

  transform(value: number): string {
    if (0 < value && value < 5) {
      return value + ' oczekujące w poczekalni';
    } else {
      return value + ' oczekujących w poczekalni';
    }
  }
}

