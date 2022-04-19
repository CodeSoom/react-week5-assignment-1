import { fetchCategories, fetchRegions } from './api';

import regions from '../../fixture/regions';
import categories from '../../fixture/categories';

describe('api', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  const fetch = jest.fn(() => Promise.resolve({
    json: () => Promise.resolve({ regions }),
  }));

  global.fetch = fetch;

  it('called with regions url', async () => {
    await fetchRegions();

    expect(fetch).toBeCalledWith('https://eatgo-customer-api.ahastudio.com/regions');
  });

  it('called with categories url', async () => {
    await fetchCategories();

    expect(fetch).toBeCalledWith('https://eatgo-customer-api.ahastudio.com/categories');
  });
});
