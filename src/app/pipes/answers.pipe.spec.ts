import { AnswersPipe } from './answers.pipe';

describe('AnswersPipe', () => {
  let pipe: AnswersPipe;

  beforeEach(() => {
    pipe = new AnswersPipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('transforms "0" to "brak odpowiedzi"', () => {
    expect(pipe.transform(0)).toEqual('brak odpowiedzi');
});

  it('transforms "1" to "1 odpowiedź"', () => {
    expect(pipe.transform(1)).toEqual('1 odpowiedź');
  });

  it('transforms "2" to "2 odpowiedzi"', () => {
    expect(pipe.transform(2)).toEqual('2 odpowiedzi');
  });
});
