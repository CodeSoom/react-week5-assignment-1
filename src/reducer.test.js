import configureStore from 'redux-mock-store';

import thunk from 'redux-thunk';

import reducer from './reducer';

import {
  setRegions,
  selectRegion,
  selectCategory,
  setCategoryList,
  setRestaurants,
  loadRestaurants,
} from './actions';

import {
  regions,
  categoryList,
  restaurants,
  selectedRegion,
  selectedCategory,
} from '../__fixture__/restaurants';

const middlewares = [thunk]; // add your middlewares like `redux-thunk`
const mockStore = configureStore(middlewares);

describe('reducer', () => {
  const initialState = {
    regions: [],
    categoryList: [],
    restaurants: [],
    selectedRegion: {},
    selectedCategory: {},
  };

  context('state 값이 전달되지 않으면', () => {
    it('initialState가 state 값으로 사용된다.', () => {
      const state = reducer(undefined, setRegions([]));

      expect(state).toEqual(initialState);
    });
  });

  context('존재하지 않는 action을 전달하면', () => {
    it('기존 state가 그대로 반환된다.', () => {
      const state = reducer(initialState, { type: 'noExistAction' });

      expect(state).toEqual(initialState);
    });
  });

  describe('setRegions', () => {
    it('레스토랑 지역 정보가 state에 등록된다.', () => {
      const state = reducer(initialState, setRegions(regions));

      expect(state.regions).toHaveLength(7);
    });
  });

  describe('selectRegion', () => {
    it('레스토랑 지역 목록의 첫번째를 선택하면 해당 지역 값이 state에 반영된다.', () => {
      const state = reducer({ ...initialState, regions }, selectRegion(regions[0].id));

      expect(state.selectedRegion.id).toEqual(state.regions[0].id);
      expect(state.selectedRegion.name).toEqual(state.regions[0].name.replace(/\([\S\s]\)/g, ''));
    });
  });

  describe('selectCategory', () => {
    it('레스토랑 카테고리 목록의 첫번째를 선택하면 해당 카테고리 값이 state에 반영된다.', () => {
      const state = reducer({ ...initialState, categoryList }, selectCategory(categoryList[0].id));

      expect(state.selectedCategory.id).toEqual(state.categoryList[0].id);
      expect(state.selectedCategory.name).toEqual(state.categoryList[0].name.replace(/\([\S\s]\)/g, ''));
    });
  });

  describe('setCategoryList', () => {
    it('레스토랑 지역 정보가 state에 등록된다.', () => {
      const state = reducer(initialState, setCategoryList(categoryList));

      expect(state.categoryList).toHaveLength(5);
    });
  });

  describe('setRestaurants', () => {
    it('레스토랑 정보가 state에 등록된다.', () => {
      const state = reducer(initialState, setRestaurants(restaurants));

      expect(state.restaurants).toHaveLength(2);
    });
  });

  describe('loadRestaurants', () => {
    context('지역과 카테고리가 모두 선택되면', () => {
      it('레스토랑 목록이 state에 저장된다. ', async () => {
        const store = mockStore({
          selectedRegion,
          selectedCategory,
        });

        await store.dispatch(loadRestaurants());

        const actions = store.getActions();

        expect(actions[0]).toEqual(setRestaurants(restaurants));
      });
    });

    context('지역과 카테고리가 선택되지 않거나 올바르지 않은 값이 전달 될 경우', () => {
      it('레스토랑 목록이 state에 저장되지 않는다. ', async () => {
        const store = mockStore({});

        await store.dispatch(loadRestaurants());

        const actions = store.getActions();

        expect(actions[0]).toEqual(setRestaurants([]));
      });
    });
  });
});
