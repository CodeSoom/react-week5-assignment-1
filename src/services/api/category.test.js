import { fetchCategories } from './category';

import CATEGORIES from '../../__fixtures__/categories.json';

describe('fetchCategories', () => {
  global.fetch = jest.fn().mockResolvedValue({
    json() {
      return CATEGORIES;
    },
  });

  it('returns categories', async () => {
    const regions = await fetchCategories();
    expect(regions).toEqual(CATEGORIES);
  });
});
