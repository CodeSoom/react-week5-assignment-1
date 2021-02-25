import {
  changeSelectedRegion,
  changeSelectedCategory,
  setCategories,
  setRegions,
  setRestaurants,
} from './actions';

import reducer from './reducer';

describe('reducer', () => {
  const preventState = {
    regions: [],
    categories: [],
    restaurants: [],
    selectedRegion: null,
    selectedCategory: null,
  };

  it('state가 지정되지 않으면 기본값을 state로 적용한다.', () => {
    const state = reducer();

    expect(state).toStrictEqual(preventState);
  });

  it('유효하지 않은 action에 대해서는 state가 변하지 않는다.', () => {
    const state = reducer(preventState, { type: '' });
    expect(preventState).toBe(state);
  });

  it('지역버튼이 클릭되면 selectedRegion가 바뀐다.', () => {
    const state = reducer(preventState, changeSelectedRegion({ id: 1, name: '서울' }));

    expect(state.selectedRegion).not.toBeNull();
  });

  it('초기 실행시 regions data를 가져온다.', () => {
    const data = [
      { id: 1, name: '서울' },
      { id: 2, name: '인천' },
    ];
    const state = reducer(preventState, setRegions(data));

    expect(state.regions).toHaveLength(2);
  });

  it('카테고리 버튼이 클릭되면 selectedCategory가 바뀐다.', () => {
    const state = reducer(preventState, changeSelectedCategory({ id: 1, name: '한식' }));
    expect(state.selectedCategory).not.toBeNull();
  });

  it('초기 실행시 categories data를 가져온다.', () => {
    const data = [
      { id: 1, name: '한식' },
      { id: 2, name: '중식' },
    ];
    const state = reducer(preventState, setCategories(data));

    expect(state.categories).toHaveLength(2);
  });

  it('음식점 정보를 가져온다.', () => {
    const restaurants = [
      {
        id: 1,
        categoryId: 1,
        name: '양천주가',
        address: '서울 강남구 123456',
        information: '양천주가 in 서울 강남구 123456',
      },
      {
        id: 6,
        categoryId: 1,
        name: '한국식 초밥',
        address: '서울 강남구',
        information: '한국식 초밥 in 서울 강남구',
      },
      {
        id: 14,
        categoryId: 1,
        name: '김초밥',
        address: '서울시 강남구 역삼동',
        information: '김초밥 in 서울시 강남구 역삼동',
      },
    ];
    const state = reducer(preventState, setRestaurants(restaurants));

    expect(state.restaurants).toHaveLength(3);
  });
});
