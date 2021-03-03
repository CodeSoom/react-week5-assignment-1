import {
  updateSelectedLocation,
  updateSelectedCategory,
  setLocations,
  setCategories,
  setRestaurants,
} from './actions';

import reducer from './reducer';

describe('reducer', () => {
  it('지역을 선택하여 선택된 지역값을 업데이트합니다.', () => {
    const state = reducer({}, updateSelectedLocation({ id: 1, name: '서울' }));

    expect(state.selectedLocation).not.toBeNull();
  });

  it('분류를 선택하여 선택된 분류값을 업데이트합니다.', () => {
    const state = reducer({}, updateSelectedCategory({ id: 1, name: '한식' }));

    expect(state.selectedCategory).not.toBeNull();
  });

  it('지역을 설정합니다.', () => {
    const initialState = {
      locations: [],
    };

    const locations = [
      { id: 1, name: '서울' },
    ];

    const state = reducer(initialState, setLocations(locations));

    expect(state.locations).toHaveLength(1);
  });

  it('분류를 설정합니다.', () => {
    const initialState = {
      categories: [],
    };

    const categories = [
      { id: 1, name: '한식' },
    ];

    const state = reducer(initialState, setCategories(categories));

    expect(state.categories).toHaveLength(1);
  });

  it('식당 목록을 출력합니다.', () => {
    const initialState = {
      restaurants: [],
    };

    const state = reducer(initialState, setRestaurants([{ id: 1, name: '치킨치킨' }]));

    expect(state.restaurants).toHaveLength(1);
  });
});
