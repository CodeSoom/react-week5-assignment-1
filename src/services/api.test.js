import {
  fetchCategories,
  fetchRegions,
  fetchRestaurants,
} from './api';

describe('api', () => {
  const url = 'https://eatgo-customer-api.ahastudio.com/';

  beforeEach(() => {
    jest.clearAllMocks();

    global.fetch = jest.fn(() => Promise.resolve({
      json: () => Promise.resolve([]),
    }));
  });

  describe('fetchRegions', () => {
    context('서버 응답이 있다면', () => {
      it('지역 목록을 가져온다', async () => {
        fetch.mockImplementationOnce(() => Promise.resolve({
          json: () => Promise.resolve([
            { id: 1, name: '서울' },
          ]),
        }));
        const regions = await fetchRegions();
        expect(regions).toEqual([
          { id: 1, name: '서울' },
        ]);
        expect(fetch).toHaveBeenCalledWith(`${url}regions`);
      });
    });

    context('서버 응답이 없다면', () => {
      it('빈 목록을 반환한다', async () => {
        fetch.mockImplementationOnce(() => Promise.reject());
        const regions = await fetchRegions();
        expect(regions).toEqual([]);
        expect(fetch).toHaveBeenCalledWith(`${url}regions`);
      });
    });
  });

  describe('fetchCategories', () => {
    context('서버 응답이 있다면', () => {
      it('카테고리 목록을 가져온다', async () => {
        fetch.mockImplementationOnce(() => Promise.resolve({
          json: () => Promise.resolve([
            { id: 1, name: '한식' },
          ]),
        }));

        const categories = await fetchCategories();
        expect(categories).toEqual([
          { id: 1, name: '한식' },
        ]);
        expect(fetch).toHaveBeenCalledWith(`${url}categories`);
      });
    });

    context('서버 응답이 없다면', () => {
      it('빈 목록을 반환한다', async () => {
        fetch.mockImplementationOnce(() => Promise.reject());
        const categories = await fetchCategories();
        expect(categories).toEqual([]);
        expect(fetch).toHaveBeenCalledWith(`${url}categories`);
      });
    });
  });

  describe('fetchCategories', () => {
    context('서버 응답이 있다면', () => {
      it('식당 목록을 가져온다', async () => {
        fetch.mockImplementationOnce(() => Promise.resolve({
          json: () => Promise.resolve([
            {
              id: 9,
              name: '호신각',
            },
          ]),
        }));

        const restaurants = await fetchRestaurants();
        expect(restaurants).toEqual([
          {
            id: 9,
            name: '호신각',
          },
        ]);
        expect(fetch).toHaveBeenCalledWith(`${url}restaurants?region=undefined&category=undefined`);
      });
    });

    context('서버 응답이 없다면', () => {
      it('빈 목록을 반환한다', async () => {
        fetch.mockImplementationOnce(() => Promise.reject());
        const restaurants = await fetchRestaurants();
        expect(restaurants).toEqual([]);
        expect(fetch).toHaveBeenCalledWith(`${url}restaurants?region=undefined&category=undefined`);
      });
    });
  });
});
