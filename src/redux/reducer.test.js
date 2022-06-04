import reducer from './reducer';

import {
  setErrorMessage,
  setRegions,
  setCategories,
  selectCategoryId,
  selectRegion,
} from './actions';

import regions from '../../fixture/regions';
import categories from '../../fixture/categories';

describe('reducer', () => {
  describe('setRegions', () => {
    it(`state의 regions 개수가 ${regions.length}개가 된다.`, () => {
      const initialState = {
        regions: [],
      };

      const state = reducer(initialState, setRegions(regions));

      expect(state.regions).toHaveLength(regions.length);
    });
  });

  describe('setCategories', () => {
    it(`state의 categories 개수가 ${categories.length}개가 된다.`, () => {
      const initialState = {
        categories: [],
      };

      const state = reducer(initialState, setCategories(categories));

      expect(state.categories).toHaveLength(categories.length);
    });
  });

  describe('selectCategoryId', () => {
    it('state의 selectedCategoryId 값이 props로 전달받은 id 값이 된다.', () => {
      const initialState = {
        selectedCategoryId: null,
      };

      const state = reducer(initialState, selectCategoryId(categories[0].id));

      expect(state.selectedCategoryId).toBe(categories[0].id);
    });
  });

  describe('selectRegion', () => {
    it('state의 selectedRegion 값이 props로 전달받은 id 값이 된다.', () => {
      const initialState = {
        selectedRegion: null,
      };

      const state = reducer(initialState, selectRegion(regions[0].name));

      expect(state.selectedRegion).toBe(regions[0].name);
    });
  });

  describe('setErrorMessage', () => {
    context('errorMessage가 있으면', () => {
      it('state의 errorMessage의 값이 바뀐다.', () => {
        const initialState = {
          errorMessage: null,
        };

        const state = reducer(initialState, setErrorMessage('지역 목록을 가져오지 못했어요.'));

        expect(state.errorMessage).toBe('지역 목록을 가져오지 못했어요. 잠시 후 다시 시도해주세요');
      });
    });

    context('errorMessage가 없으면', () => {
      it('state의 errorMessage의 값이 바뀌지 않는다.', () => {
        const initialState = {
          errorMessage: null,
        };

        const state = reducer(initialState, setErrorMessage());

        expect(state.errorMessage).toBeNull();
      });
    });
  });

  describe('action이 undefined면', () => {
    it('initialState를 반환한다', () => {
      const initialState = {
        regions: [],
        errorMessage: null,
      };
      const state = reducer(initialState, undefined);

      expect(state).toEqual(initialState);
    });
  });

  describe('state가 undefined면', () => {
    it('initialState를 반환한다', () => {
      const initialState = {
        regions: [],
        errorMessage: null,
      };

      const state = reducer(undefined, setErrorMessage('지역 목록을 가져오지 못했어요.'));

      expect(state.regions).toEqual(initialState.regions);
      expect(state.errorMessage).toEqual('지역 목록을 가져오지 못했어요. 잠시 후 다시 시도해주세요');
    });
  });
});
