import { setCategories, setRegions, setRestaurants } from './actions';

import regions from '../fixtures/regions';
import categories from '../fixtures/categories';
import restaurants from '../fixtures/restaurants';

describe('actions', () => {
  const dispatch = jest.fn();

  describe('loadRegions', () => {
    it('"loadRegions"가 완료되면 "setRegions" 액션을 dispatch한다', async () => {
      await loadRegions()(dispatch);

      expect(dispatch).toBeCalledWith(setRegions(regions));
    });
  });

  describe('loadCategories', () => {
    it('"loadCategories"가 완료되면 "setCategories" 액션을 dispatch한다', async () => {
      await loadCategories()(dispatch);

      expect(dispatch).toBeCalledWith(setCategories(categories));
    });
  });

  describe('loadRestaurants', () => {
    context('regionName, categoryId가 모두 존재할 때', () => {
      it('"loadRestaurants"가 완료되면 "loadRestaurants" 액션을 dispatch한다', async () => {
        const getState = jest.fn(() => ({
          regionName: '서울',
          categoryId: 1,
        }));

        await loadRestaurants()(dispatch, getState);

        expect(dispatch).toBeCalledWith(setRestaurants(restaurants));
      });
    });

    context('regionName이 존재하지 않을 때', () => {
      it('dispatch 하지 않는다', async () => {
        const getState = jest.fn(() => ({
          regionName: '',
          categoryId: 1,
        }));

        await loadRestaurants()(dispatch, getState);

        expect(dispatch).not.toBeCalled();
      });
    });

    context('categoryId가 존재하지 않을 때', () => {
      it('dispatch 하지 않는다', async () => {
        const getState = jest.fn(() => ({
          regionName: '서울',
          categoryId: 1,
        }));

        await loadRestaurants()(dispatch, getState);

        expect(dispatch).not.toBeCalled();
      });
    });
  });
});
