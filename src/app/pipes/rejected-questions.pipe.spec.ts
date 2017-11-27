import { RejectedQuestionsPipe } from './rejected-questions.pipe';

describe('RejectedQuestionsPipe', () => {
  let pipe: RejectedQuestionsPipe;

  beforeEach(() => {
    pipe = new RejectedQuestionsPipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('transforms "0" to "0 odrzuconych"', () => {
    expect(pipe.transform(0)).toEqual('0 odrzuconych');
  });

  it('transforms "1" to "1 odrzucone"', () => {
    expect(pipe.transform(1)).toEqual('1 odrzucone');
  });

  it('transforms "100" to "100 odrzuconych"', () => {
    expect(pipe.transform(100)).toEqual('100 odrzuconych');
  });
});
