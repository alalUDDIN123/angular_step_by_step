import { GenPipe } from './gen.pipe';

describe('GenPipe', () => {
  let pipe: GenPipe;

  beforeEach(() => {
    pipe = new GenPipe();
  });

  it('should transform male name correctly', () => {
    let modifiedName = pipe.transform('John', 'male');
    expect(modifiedName).toBe('Mr John');
  });

  it('should transform female name correctly', () => {
    let modifiedName = pipe.transform('Jane', 'female');
    expect(modifiedName).toBe('Miss Jane');
  });
});
