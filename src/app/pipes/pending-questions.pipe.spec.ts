import { PendingQuestionsPipe } from './pending-questions.pipe';

describe('PendingQuestionsPipe', () => {
  let pipe: PendingQuestionsPipe;

  beforeEach(() => {
    pipe = new PendingQuestionsPipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('transforms "0" to "0 oczekujących w poczekalni"', () => {
    expect(pipe.transform(0)).toEqual('0 oczekujących w poczekalni');
  });

  it('transforms "1" to "1 oczekujące w poczekalni"', () => {
    expect(pipe.transform(1)).toEqual('1 oczekujące w poczekalni');
  });

  it('transforms "100" to "100 oczekujących w poczekalni"', () => {
    expect(pipe.transform(100)).toEqual('100 oczekujących w poczekalni');
  });
});

