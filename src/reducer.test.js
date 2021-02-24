import {
  changeSelectedRegion,
  changeSelectedCategory,
  setCategories,
  setRegions,
} from './actions';

import reducer from './reducer';

describe('reducer', () => {
  const preventState = {
    regions: [],
    categories: [],
    selectedRegionId: 0,
    selectedCategoryId: 0,
  };

  it('지역버튼이 클릭되면 selectedRegionId가 바뀐다.', () => {
    const state = reducer(preventState, changeSelectedRegion(2));
    expect(state.selectedRegionId).toBe(2);
  });

  it('초기 실행시 regions data를 가져온다.', () => {
    const data = [
      { id: 1, name: '서울' },
      { id: 2, name: '인천' },
    ];
    const state = reducer(preventState, setRegions(data));

    expect(state.regions).toHaveLength(2);
  });

  it('카테고리 버튼이 클릭되면 selectedCategoryId가 바뀐다.', () => {
    const state = reducer(preventState, changeSelectedCategory(2));
    expect(state.selectedCategoryId).toBe(2);
  });

  it('초기 실행시 categories data를 가져온다.', () => {
    const data = [
      { id: 1, name: '한식' },
      { id: 2, name: '중식' },
    ];
    const state = reducer(preventState, setCategories(data));

    expect(state.categories).toHaveLength(2);
  });
});
