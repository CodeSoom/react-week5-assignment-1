import { fetchRegions } from './api';

describe('api', () => {
  it('fetchRegions', () => {
    const fetch = jest.fn();

    fetch.mockImplementation(() => ({
      regions: [
        { id: 1, name: '서울' },
      ],
    }));

    const data = fetchRegions();

    expect(data).toBe([
      { id: 1, name: '서울' },
    ]);
  });
});
