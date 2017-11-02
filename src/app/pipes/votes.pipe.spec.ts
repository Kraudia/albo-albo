import { VotesPipe } from './votes.pipe';

describe('VotesPipe', () => {
  let pipe: VotesPipe;

  beforeEach(() => {
    pipe = new VotesPipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('transforms "0" to "brak głosów"', () => {
    expect(pipe.transform(0)).toEqual('brak głosów');
});

  it('transforms "1" to "1 głos"', () => {
    expect(pipe.transform(1)).toEqual('1 głos');
  });

  it('transforms "2" to "2 głosy"', () => {
    expect(pipe.transform(2)).toEqual('2 głosy');
  });

  it('transforms "100" to "100 głosów"', () => {
    expect(pipe.transform(100)).toEqual('100 głosów');
  });
});
