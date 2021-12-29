import {
  setCategories,
  setRegions,
  setRestaurants,
  setSelectedItem,
} from '../actions/restaurant';
import restaurantReducer, { initialState } from './restaurant';
import { categories, regions, restaurants } from '../../fixtures/restaurant';

describe('restaurantReducer', () => {
  it('인자 없이 호출하면 기본 상태를 반환합니다.', () => {
    const state = restaurantReducer();

    expect(state).toEqual(initialState);
  });

  it('액션 없이 호출하면 이전 상태를 반환합니다.', () => {
    const state = restaurantReducer(initialState);

    expect(state).toEqual(initialState);
  });

  it('setRegions 액션은 상태의 regions를 설정합니다.', () => {
    const state = restaurantReducer(initialState, setRegions(regions));

    expect(state.regions).toEqual(regions);
  });

  it('setCategories 액션은 상태의 categories를 설정합니다.', () => {
    const state = restaurantReducer(initialState, setCategories(categories));

    expect(state.categories).toEqual(categories);
  });

  it('setRestaurants 액션은 상태의 restaurants를 설정합니다.', () => {
    const state = restaurantReducer(initialState, setRestaurants(restaurants));

    expect(state.restaurants).toEqual(restaurants);
  });

  describe('setSelectedItem 액션은 상태의 selected를 설정합니다.', () => {
    it('regionName과 categoryId를 변경합니다.', () => {
      const selected = { regionName: 'foo', categoryId: 1 };
      const state = restaurantReducer(initialState, setSelectedItem(selected));

      expect(state.selected).toEqual(selected);
    });
  });
});
