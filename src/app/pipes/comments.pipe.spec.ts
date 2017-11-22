import { CommentsPipe } from './comments.pipe';

describe('CommentsPipe', () => {
  let pipe: CommentsPipe;

  beforeEach(() => {
    pipe = new CommentsPipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('transforms "0" to "brak komentarzy"', () => {
    expect(pipe.transform(0)).toEqual('brak komentarzy');
});

  it('transforms "1" to "1 komentarz"', () => {
    expect(pipe.transform(1)).toEqual('1 komentarz');
  });

  it('transforms "2" to "2 komentarze"', () => {
    expect(pipe.transform(2)).toEqual('2 komentarze');
  });

  it('transforms "100" to "100 komentarzy"', () => {
    expect(pipe.transform(100)).toEqual('100 komentarzy');
  });
});
