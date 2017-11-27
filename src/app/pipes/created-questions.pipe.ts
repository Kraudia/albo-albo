import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'createdQuestions'
})
export class CreatedQuestionsPipe implements PipeTransform {

  transform(value: number): string {
    if (value === 1) {
      return value + ' utworzone pytanie';
    } else if (1 < value && value < 5) {
      return value + ' utworzone pytania';
    } else {
      return value + ' utworzonych pytań';
    }
  }
}
