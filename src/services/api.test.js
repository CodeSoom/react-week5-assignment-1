import { fetchCategories, fetchRegions, fetchRestaurants } from './api';

export default function fetchMaker(fetchData) {
  global.fetch = jest.fn().mockImplementation(() => new Promise((resolve) => {
    resolve({
      json: () => (fetchData),
    });
  }));
}

describe('fetchRegions', () => {
  it('load regions', async () => {
    fetchMaker([{ id: 1, name: '서울' }]);

    const regions = await fetchRegions();

    expect(regions).toHaveLength(1);
    expect(regions[0].name).toBe('서울');
  });

  it('load categories', async () => {
    fetchMaker([{ id: 1, name: '한국' }]);
    const categories = await fetchCategories();

    expect(categories).toHaveLength(1);
    expect(categories[0].name).toBe('한국');
  });

  it('load restarants', async () => {
    fetchMaker([{ id: 1, name: '마녀사냥' }]);

    const restarants = await fetchRestaurants(
      { selectRegionId: 1, selectCategoryId: 1 },
    );

    expect(restarants).toHaveLength(1);
    expect(restarants[0].name).toBe('마녀사냥');
  });
});
