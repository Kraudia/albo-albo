import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'answers'
})
export class AnswersPipe implements PipeTransform {
  transform(value: number): string {
    if (value < 1) {
      return 'brak odpowiedzi';
    } else if (value === 1) {
      return value + ' odpowiedź';
    } else {
      return value + ' odpowiedzi';
    }
  }
}
