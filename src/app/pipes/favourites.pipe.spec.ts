import { FavouritesPipe } from './favourites.pipe';

describe('FavouritesPipe', () => {
  let pipe: FavouritesPipe;

  beforeEach(() => {
    pipe = new FavouritesPipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('transforms "0" to "nikt nie dodał do ulubionych"', () => {
    expect(pipe.transform(0)).toEqual('nikt nie dodał do ulubionych');
  });

  it('transforms "1" to "1 osoba dodała do ulubionych"', () => {
    expect(pipe.transform(1)).toEqual('1 osoba dodała do ulubionych');
  });

  it('transforms "2" to "2 osoby dodały do ulubionych"', () => {
    expect(pipe.transform(2)).toEqual('2 osoby dodały do ulubionych');
  });

  it('transforms "100" to "100 osób dodało do ulubionych"', () => {
    expect(pipe.transform(100)).toEqual('100 osób dodało do ulubionych');
  });
});
