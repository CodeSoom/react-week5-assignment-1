import reducer from './reducer';

import {
  loadCategories,
  loadRegions,
  loadRestaurants,
  updateCategories,
  updateCheckedElement,
  updateRegions,
  updateRestaurants,
} from './actions';

jest.mock('./services/api');

describe('reducer', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  const dispatch = jest.fn();

  context('action이 없다면,', () => {
    const notExistedAction = jest.fn();

    notExistedAction.mockImplementation(() => ({
      type: 'notExistedAction',
    }));

    it('아무 것도 변경하지 않는다', () => {
      const state = reducer(undefined, notExistedAction());

      expect(state.checkedRegion).toMatchObject({});
      expect(state.checkedCategory).toMatchObject({});
      expect(state.regions).toHaveLength(0);
      expect(state.categories).toHaveLength(0);
      expect(state.restaurants).toHaveLength(0);
    });
  });

  context('action이 있다면', () => {
    describe('updateRegions', () => {
      it('지역 목록을 갱신한다', () => {
        const regions = [
          { id: 1, name: '서울' },
          { id: 2, name: '대구' },
          { id: 3, name: '부산' },
        ];

        const state = reducer({
          regions: [],
        }, updateRegions(regions));

        expect(state.regions).toHaveLength(3);
      });
    });

    describe('updateCategories', () => {
      it('지역 목록을 갱신한다', () => {
        const categories = [
          { id: 1, name: '한식' },
          { id: 2, name: '중식' },
          { id: 3, name: '일식' },
        ];

        const state = reducer({
          categories: [],
        }, updateCategories(categories));

        expect(state.categories).toHaveLength(3);
      });
    });

    describe('updateRestaurants', () => {
      it('식당 목록을 갱신한다', () => {
        const restaurants = [
          {
            id: 9,
            categoryId: 2,
            name: '호신각',
            address: '서울 강남구',
            information: '호신각 in 서울 강남구',
          },
        ];

        const state = reducer({
          restaurants: [],
        }, updateRestaurants(restaurants));

        expect(state.restaurants).toHaveLength(1);
      });
    });

    describe('updateCheckedElement', () => {
      it('선택된 지역을 저장한다', () => {
        const region = {
          id: 1,
          text: '서울',
        };

        const state = reducer({
          checkedRegion: {},
        }, updateCheckedElement('region', region));

        expect(state.checkedRegion).toMatchObject({
          id: 1,
          text: '서울',
        });
      });

      it('선택된 카테고리를 저장한다', () => {
        const category = {
          id: 1,
          text: '일식',
        };

        const state = reducer({
          checkedCategory: {},
        }, updateCheckedElement('category', category));

        expect(state.checkedCategory).toMatchObject({
          id: 1,
          text: '일식',
        });
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
    describe('updateCategories', () => {
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
    describe('updateCategories', () => {
      it('API를 통해 식당 목록을 가져온다', async () => {
        await loadRestaurants()(dispatch);

        expect(dispatch).toBeCalledWith(
          {
            payload:
            {
              restaurants:
              [
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
                {
                  id: 11,
                  categoryId: 2,
                  name: '몰라몰라',
                  address: '서울이다',
                  information: '몰라몰라 in 서울이다',
                },
              ],
            },
            type: 'updateRestaurants',
          },
        );
      });
    });
  });
});
