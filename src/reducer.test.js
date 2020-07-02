import reducer from './reducer';

import {
  setRegions,
  setCategories,
} from './actions';

const initialState = {
  regions: [],
  categories: [],
};

describe('reducer', () => {
  it('state가 없으면 초기 상태 사용', () => {
    const state = reducer(undefined);
    expect(state).toEqual(initialState);
  });

  it('set restaurant region into regions', () => {
    const regions = [
      { id: 1, name: '서울' },
    ];

    const state = reducer(initialState, setRegions(regions));

    expect(state.regions).toHaveLength(1);
  });

  it('set restaurant category into categorys', () => {
    const categories = [
      { id: 1, name: '한식' },
      { id: 2, name: '중식' },
    ];

    const state = reducer(initialState, setCategories(categories));
    expect(state.categories).toHaveLength(2);
  });

  it('select region', () => {
    const region = '서울';
    const state = reducer(initialState, selectRegion(region));
    expect(state.region).toBe('서울');
  });
});
