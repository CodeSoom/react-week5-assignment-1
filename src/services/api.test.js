import {
  fetchCategories,
  fetchRegions,
  fetchRestaurants,
} from './api';

describe('api', () => {
  beforeEach(() => {
    jest.clearAllMocks();

    global.fetch = jest.fn(() => Promise.resolve({
      json: () => Promise.resolve([]),
    }));
  });

  it('지역 목록을 가져온다', async () => {
    fetch.mockImplementationOnce(() => Promise.resolve({
      json: () => Promise.resolve([
        { id: 1, name: '서울' },
        { id: 2, name: '대구' },
        { id: 3, name: '부산' },
      ]),
    }));
    const data = await fetchRegions();
    expect(data).toEqual([
      { id: 1, name: '서울' },
      { id: 2, name: '대구' },
      { id: 3, name: '부산' },
    ]);
    expect(fetch).toHaveBeenCalledWith('https://eatgo-customer-api.ahastudio.com/regions');
  });

  it('카테고리 목록을 가져온다', async () => {
    fetch.mockImplementationOnce(() => Promise.resolve({
      json: () => Promise.resolve([
        { id: 1, name: '한식' },
        { id: 2, name: '중식' },
        { id: 3, name: '일식' },
      ]),
    }));

    const data = await fetchCategories();
    expect(data).toEqual([
      { id: 1, name: '한식' },
      { id: 2, name: '중식' },
      { id: 3, name: '일식' },
    ]);
    expect(fetch).toHaveBeenCalledWith('https://eatgo-customer-api.ahastudio.com/categories');
  });

  it('지역 목록을 가져온다', async () => {
    fetch.mockImplementationOnce(() => Promise.resolve({
      json: () => Promise.resolve([
        {
          id: 9,
          categoryId: 2,
          name: '호신각',
          address: '서울 강남구',
          information: '호신각 in 서울 강남구',
        },
        {
          id: 10,
          categoryId: 2,
          name: '홍콩반점',
          address: '서울시 서대문구',
          information: '홍콩반점 in 서울시 서대문구',
        },
      ]),
    }));

    const data = await fetchRestaurants();
    expect(data).toEqual([
      {
        id: 9,
        categoryId: 2,
        name: '호신각',
        address: '서울 강남구',
        information: '호신각 in 서울 강남구',
      },
      {
        id: 10,
        categoryId: 2,
        name: '홍콩반점',
        address: '서울시 서대문구',
        information: '홍콩반점 in 서울시 서대문구',
      },
    ]);
    expect(fetch).toHaveBeenCalledWith('https://eatgo-customer-api.ahastudio.com/restaurants?region=undefined&category=undefined');
  });
});
