import { Movie } from './Movie';

describe('guid', () => {
  it('should get routes', () => {
    const movie = new Movie('api-key');

    expect(movie.getRoutes()).toEqual([
        {api: '/movie', cb: expect.any(Function)},
        {api: '/genre', cb: expect.any(Function)}
    ]);
  });
});
