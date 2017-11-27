import { AcceptedQuestionsPipe } from './accepted-questions.pipe';

describe('AcceptedQuestionsPipe', () => {
  let pipe: AcceptedQuestionsPipe;

  beforeEach(() => {
    pipe = new AcceptedQuestionsPipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('transforms "0" to "0 zawierdzonych"', () => {
    expect(pipe.transform(0)).toEqual('0 zatwierdzonych');
  });

  it('transforms "1" to "1 zawierdzone"', () => {
    expect(pipe.transform(1)).toEqual('1 zatwiedzone');
  });
});
