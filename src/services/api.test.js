import { fetchCategories, fetchRegions, fetchRestaurants } from './api';

function fetchMaker(fetchData) {
  global.fetch = jest.fn().mockImplementation(() => new Promise((resolve) => {
    resolve({
      json: () => (fetchData),
    });
  }));
}

describe('fetchRegions', () => {
  it('fetches regions', async () => {
    fetchMaker([{ id: 1, name: '서울' }]);

    const regions = await fetchRegions();

    expect(regions).toHaveLength(1);
    expect(regions[0].name).toBe('서울');
  });

  it('fetches categories', async () => {
    fetchMaker([{ id: 1, name: '서울' }]);

    const categories = await fetchCategories();

    expect(categories).toHaveLength(1);
    expect(categories[0].name).toBe('서울');
  });

  it('fetches restarants', async () => {
    fetchMaker([{ id: 1, name: '마녀사냥' }]);

    const restarants = await fetchRestaurants((
      {
        selectedRegion: { id: 1, name: '서울' },
        selectedCategory: { id: 1, name: '한식' },
      }
    ));

    expect(restarants).toHaveLength(1);
    expect(restarants[0].name).toBe('마녀사냥');
  });
});
