import { guid } from './guid';

describe('guid', () => {
  beforeEach(() => {});

  it('should get guid', () => {
    const id = guid();

    expect(id).toEqual(expect.any(String));
  });
});
