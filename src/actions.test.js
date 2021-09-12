import {
  loadCategories,
  loadRegions,
  loadRestaurants,
  updateCategories,
  updateCheckedItem,
  updateRegions,
  updateRestaurants,
} from './actions';

jest.mock('./services/api');

describe('actions', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  const dispatch = jest.fn();

  describe('updateRegions', () => {
    it('액션을 생성한다', () => {
      const regions = [
        { id: 1, name: '서울' },
        { id: 2, name: '대구' },
        { id: 3, name: '부산' },
      ];

      const action = updateRegions(regions);

      expect(action.type).toBe('updateRegions');
      expect(action.payload.regions).toBe(regions);
    });
  });

  describe('updateCategories', () => {
    it('액션을 생성한다', () => {
      const categories = [
        { id: 1, name: '한식' },
        { id: 2, name: '중식' },
        { id: 3, name: '일식' },
      ];

      const action = updateCategories(categories);

      expect(action.type).toBe('updateCategories');
      expect(action.payload.categories).toBe(categories);
    });
  });

  describe('updateRestaurants', () => {
    it('액션을 생성한다', () => {
      const restaurants = [
        { id: 1, name: '순두부집' },
        { id: 2, name: '곱창집' },
        { id: 3, name: '쭈꾸미집' },
      ];

      const action = updateRestaurants(restaurants);

      expect(action.type).toBe('updateRestaurants');
      expect(action.payload.restaurants).toBe(restaurants);
    });
  });

  describe('loadRegions', () => {
    it('API를 통해 지역 목록을 가져온다', async () => {
      await loadRegions()(dispatch);

      expect(dispatch).toBeCalledWith(
        {
          payload:
            {
              regions:
              [
                { id: 1, name: '서울' },
                { id: 2, name: '대구' },
                { id: 3, name: '부산' },
              ],
            },
          type: 'updateRegions',
        },
      );
    });
  });

  describe('loadCategories', () => {
    it('API를 통해 카테고리 목록을 가져온다', async () => {
      await loadCategories()(dispatch);

      expect(dispatch).toBeCalledWith(
        {
          payload:
            {
              categories:
              [
                { id: 1, name: '한식' },
                { id: 2, name: '중식' },
                { id: 3, name: '일식' },
              ],
            },
          type: 'updateCategories',
        },
      );
    });
  });

  describe('loadRestaurants', () => {
    const getState = jest.fn(() => ({
      checkedRegion: {
        id: 1,
        text: '서울',
      },
      checkedCategory: {
        id: 2,
        text: '중식',
      },
    }));

    it('API를 통해 식당 목록을 가져온다', async () => {
      await loadRestaurants()(dispatch, getState);

      expect(dispatch).toBeCalledWith(
        {
          payload:
            {
              restaurants:
              [
                {
                  id: 9,
                  name: '호신각',
                },
                {
                  id: 10,
                  name: '홍콩반점',
                },
                {
                  id: 11,
                  name: '몰라몰라',
                },
              ],
            },
          type: 'updateRestaurants',
        },
      );
    });
  });

  describe('updateCheckedItem', () => {
    it('액션을 생성한다', () => {
      const name = 'region';
      const value = {
        id: 1,
        text: '한식',
      };

      const action = updateCheckedItem(name, value);

      expect(action.type).toBe('updateCheckedRegion');
      expect(action.payload.checkedRegion).toBe(value);
    });
  });
});
