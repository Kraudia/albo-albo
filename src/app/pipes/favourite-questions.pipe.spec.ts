import { FavouriteQuestionsPipe } from './favourite-questions.pipe';

describe('FavouriteQuestionsPipe', () => {
  let pipe: FavouriteQuestionsPipe;

  beforeEach(() => {
    pipe = new FavouriteQuestionsPipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('transforms "0" to "0 ulubionych pytań"', () => {
    expect(pipe.transform(0)).toEqual('0 ulubionych pytań');
  });

  it('transforms "1" to "1 ulubione pytanie"', () => {
    expect(pipe.transform(1)).toEqual('1 ulubione pytanie');
  });

  it('transforms "2" to "2 ulubione pytania"', () => {
    expect(pipe.transform(2)).toEqual('2 ulubione pytania');
  });

  it('transforms "100" to "100 ulubionych pytań"', () => {
    expect(pipe.transform(100)).toEqual('100 ulubionych pytań');
  });
});
