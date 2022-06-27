import reducer from './reducer';

import {
  setErrorMessage,
  setRegions,
  setCategories,
  selectCategoryId,
  selectRegion,
  setRestaurants,
} from './actions';

import mockInitialState from '../../fixture/initialState';
import regions from '../../fixture/regions';
import categories from '../../fixture/categories';
import restaurants from '../../fixture/restaurants';

describe('reducer', () => {
  describe('setRegions', () => {
    it(`state의 regions 개수가 ${regions.length}개가 된다.`, () => {
      const state = reducer(mockInitialState, setRegions(regions));

      expect(state.regions).toHaveLength(regions.length);
    });
  });

  describe('setCategories', () => {
    it(`state의 categories 개수가 ${categories.length}개가 된다.`, () => {
      const state = reducer(mockInitialState, setCategories(categories));

      expect(state.categories).toHaveLength(categories.length);
    });
  });

  describe('setRestaurants', () => {
    it(`state의 restaurants 개수가 ${restaurants.length}개가 된다.`, () => {
      const state = reducer(mockInitialState, setRestaurants(restaurants));

      expect(state.restaurants).toHaveLength(restaurants.length);
    });
  });

  describe('selectCategoryId', () => {
    it('state의 selectedCategoryId 값이 props로 전달받은 id 값이 된다.', () => {
      const state = reducer(mockInitialState, selectCategoryId(categories[0].id));

      expect(state.selectedCategoryId).toBe(categories[0].id);
    });
  });

  describe('selectRegion', () => {
    it('state의 selectedRegion 값이 props로 전달받은 id 값이 된다.', () => {
      const state = reducer(mockInitialState, selectRegion(regions[0].name));

      expect(state.selectedRegion).toBe(regions[0].name);
    });
  });

  describe('setErrorMessage', () => {
    context('errorMessage가 있으면', () => {
      it('state의 errorMessage의 값이 바뀐다.', () => {
        const state = reducer(mockInitialState, setErrorMessage('regions', '지역 목록을 가져오지 못했어요.'));

        expect(state.errorMessage.regions).toBe('지역 목록을 가져오지 못했어요. 잠시 후 다시 시도해주세요');
      });
    });

    context('errorMessage가 없으면', () => {
      it('state의 errorMessage의 값이 바뀌지 않는다.', () => {
        const state = reducer(mockInitialState, setErrorMessage());

        expect(state.errorMessage).toEqual(mockInitialState.errorMessage);
      });
    });
  });

  describe('action이 undefined면', () => {
    it('initialState를 반환한다', () => {
      const state = reducer(mockInitialState, undefined);

      expect(state).toEqual(mockInitialState);
    });
  });

  describe('state가 undefined면', () => {
    it('initialState를 반환한다', () => {
      const state = reducer(undefined, setErrorMessage('regions', '지역 목록을 가져오지 못했어요.'));

      expect(state.regions).toEqual(mockInitialState.regions);
      expect(state.errorMessage.regions).toEqual('지역 목록을 가져오지 못했어요. 잠시 후 다시 시도해주세요');
    });
  });
});
