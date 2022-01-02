import reducer from './reducer';

import {
  setCategories,
  setRegions,
  setRegion,
  setCategory,
  setRestaurants,
} from './actions';
import { CATEGORIES, REGIONS, RESTAURANTS } from '../lib/fixtures';

describe('reducer', () => {
  describe('setCategories', () => {
    const previousState = {
      categories: [],
    };

    it('카테고리를 저장한다', () => {
      const { categories } = reducer(previousState, setCategories(CATEGORIES));

      expect(categories.length).toBe(4);
    });
  });

  describe('setRegions', () => {
    const previousSate = {
      regions: [],
    };

    it('지역을 저장한다', () => {
      const { regions } = reducer(previousSate, setRegions(REGIONS));

      expect(regions.length).toBe(2);
    });
  });

  describe('setRestaurants', () => {
    const previousSate = {
      restaurants: [],
    };

    it('식당 목록을 저장한다', () => {
      const { restaurants } = reducer(
        previousSate,
        setRestaurants(RESTAURANTS)
      );

      expect(restaurants.length).toBe(1);
    });
  });

  describe('setCategory', () => {
    const previousSate = {
      category: {
        id: 0,
        name: '',
      },
    };

    it('선택된 카테고리를 저장한다', () => {
      const { category } = reducer(previousSate, setCategory(CATEGORIES[0]));

      expect(category).toEqual(CATEGORIES[0]);
    });
  });

  describe('setRegion', () => {
    const previousSate = {
      region: {
        id: 0,
        name: '',
      },
    };

    it('선택된 지역을 저장한다', () => {
      const { region } = reducer(previousSate, setRegion(REGIONS[0]));

      expect(region).toEqual(REGIONS[0]);
    });
  });

  describe('defaultReducer', () => {
    const initialState = {
      categories: [],
      regions: [],
      restaurants: [],
      category: {
        id: 0,
        name: '',
      },
      region: {
        id: 0,
        name: '',
      },
    };

    context('state가 존재함', () => {
      it('state를 반환한다', () => {
        const { regions } = reducer({ regions: REGIONS }, { type: 'noAction' });
        expect(regions).toEqual(REGIONS);
      });
    });

    context('state가 없음', () => {
      it('초기 state를 반환한다', () => {
        const state = reducer(undefined, { type: 'noAction' });
        expect(state).toEqual(initialState);
      });
    });
  });
});
