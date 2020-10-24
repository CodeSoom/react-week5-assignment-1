import { fetchRestaurants } from './api';

describe('fail to fetch restaurants data', () => {
  it('should throw Error', async () => {
    expect.assertions(1);

    try {
      await fetchRestaurants({});
    } catch (e) {
      expect(e).toEqual(e);
    }
  });
});
