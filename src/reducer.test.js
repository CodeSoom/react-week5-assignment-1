import reducer from './reducer';

import {
  setRegions,
  setCategories,
  setRestaurants,
  changeRegionName,
  changeCategoryId,
} from './actions';

describe('reducer', () => {
  it('sets regions with new regions', () => {
    const regions = [{ id: 1, name: '수원' }];

    const initialState = {
      regions: [],
    };

    const state = reducer(initialState, setRegions(regions));

    expect(state.regions).toHaveLength(1);
  });

  it('sets categories with new categories', () => {
    const categories = [{ id: 1, name: '패스트푸드' }];

    const initialState = {
      categories: [],
    };

    const state = reducer(initialState, setCategories(categories));

    expect(state.categories).toHaveLength(1);
  });

  it('sets restaurants with new restaurants', () => {
    const restaurants = [
      { id: 1, name: '버거킹' },
      { id: 2, name: '입주집' },
    ];

    const initialState = {
      restaurants: [],
    };

    const state = reducer(initialState, setRestaurants(restaurants));

    expect(state.restaurants).toHaveLength(2);
  });

  it('change regionName', () => {
    const regionName = '수원';

    const initialState = {
      regionName: '',
    };

    const state = reducer(initialState, changeRegionName(regionName));

    expect(state.regionName).toBe('수원');
  });

  it('change categoryId', () => {
    const categoryId = 1;

    const initialState = {
      categoryId: '',
    };

    const state = reducer(initialState, changeCategoryId(categoryId));

    expect(state.categoryId).toBe(1);
  });
});

describe('존재하지 않는 액션 타입', () => {
  it("state doesn't change", () => {
    const state = reducer(undefined, {
      type: 'notExistingAction',
      payload: {
        regionName: '수원',
        categoryId: 1,
      },
    });

    expect(state.regionName).toBe('');
    expect(state.categoryId).toBe(0);
  });
});
