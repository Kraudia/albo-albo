import { CreatedQuestionsPipe } from './created-questions.pipe';

describe('CreatedQuestionsPipe', () => {
  let pipe: CreatedQuestionsPipe;

  beforeEach(() => {
    pipe = new CreatedQuestionsPipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('transforms "0" to "0 utworzonych pytań"', () => {
    expect(pipe.transform(0)).toEqual('0 utworzonych pytań');
  });

  it('transforms "1" to "1 utworzone pytanie"', () => {
    expect(pipe.transform(1)).toEqual('1 utworzone pytanie');
  });

  it('transforms "2" to "2 utworzone pytania"', () => {
    expect(pipe.transform(2)).toEqual('2 utworzone pytania');
  });

  it('transforms "100" to "100 utworzonych pytań"', () => {
    expect(pipe.transform(100)).toEqual('100 utworzonych pytań');
  });
});
