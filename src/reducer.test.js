import {
  intializeSelectButtons,
  setSelectedButton,
  setRestaurants,
} from './actions';

import reducer, { initialState } from './reducer';

import { regions, categories, restaurants, selectedButtons } from '../fixtures/fixture';

describe('initialState', () => {
  it('초기 state가 초기화됩니다.', () => {
    expect(initialState).toEqual({
      regions: [],
      categories: [],
      restaurants: [],
      selectedButtons: {
        region: '',
        category: '',
      },
    });
  });
});

describe('reducer', () => {
  it('정의되어 있지 않은 action을 입력하면 현재 state이 반환합니다.', () => {
    const state = reducer(
      initialState,
      { type: 'incorrectType', payload: { type: '', value: '' } },
    );

    expect(state).toEqual(initialState);
  });

  describe('intializeSelectButtons', () => {
    it('regions, categories 주어진 값으로 초기화합니다.', () => {

      const state = reducer(
        initialState,
        intializeSelectButtons({ regions, categories }),
      );

      expect(state.regions).toEqual(regions);
      expect(state.categories).toEqual(categories);
    });
  });

  describe('setSelectedButton', () => {
    it('setSelectedButtons의 region을 value로 설정합니다.', () => {
      const { selectedButtons: { region } } = reducer(
        initialState,
        setSelectedButton({ type: 'region', value: '서울' }),
      );

      expect(region).toBe('서울');
    });

    it('setSelectedButton의 category을 value로 설정합니다.', () => {
      const { selectedButtons: { category } } = reducer(
        initialState,
        setSelectedButton({ type: 'category', value: '한식' }),
      );

      expect(category).toBe('한식');
    });
  });

  describe('setRestaurants', () => {
    it('restaurants의 value로 설정합니다.', () => {
      const state = reducer(
        initialState,
        setRestaurants(restaurants),
      );

      expect(state.restaurants).toEqual(restaurants);
    });
  });
});
