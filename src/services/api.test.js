import {
  fetchRestaurants,
  fetchCategories,
  fetchRegions,
} from './api';

import region from '../../fixture/region';
import category from '../../fixture/category';
import restaurants from '../../fixture/retaurants';

function fetchMock(item) {
  global.fetch = jest.fn(async () => Promise.resolve({
    json: async () => Promise.resolve(item),
  }));
}

describe('api', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('fetchRegion는 불러온 지역정보를 반환한다.', async () => {
    fetchMock(region);

    const data = await fetchRegions();

    expect(data).toBe(region);
  });

  it('fetchCategory는 불러온 지역정보를 반환한다.', async () => {
    fetchMock(category);

    const data = await fetchCategories();

    expect(data).toBe(category);
  });

  it('fetchRegion는 불러온 지역정보를 반환한다.', async () => {
    fetchMock(restaurants);

    const data = await fetchRestaurants();

    expect(data).toBe(restaurants);
  });
});
