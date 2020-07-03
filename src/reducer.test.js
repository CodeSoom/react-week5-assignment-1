import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import reducer from './reducer';

import { regions, categories, initialState } from '../fixtures/restaurants';

import {
  setRegions,
  setCategories,
  loadRegions,
  loadCategories,
} from './actions';

jest.mock('./services/api');
const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe('reducer', () => {
  it('처음에는 초기 상태를 반환한다.', () => {
    const state = reducer(undefined);
    expect(state).toEqual(initialState);
  });

  it('지역 정보를 추가한다.', () => {
    const state = reducer(initialState, setRegions(regions));
    expect(state.regions).toEqual(regions);
  });

  it('지역 중 하나를 선택하면 region에 담는다', () => {
    const state = reducer(initialState, {
      type: 'setRegion',
      payload: {
        region: '서울',
      },
    });
    expect(state.region).toBe('서울');
  });

  it('should execute fetch regions', () => {
    const store = mockStore({
      regions: [],
    });
    return store.dispatch(loadRegions())
      .then(() => {
        const actions = store.getActions();
        expect(actions[0].type).toEqual('setRegions');
      });
  });

  it('분류 정보를 추가한다', () => {
    const state = reducer(initialState, setCategories(categories));
    expect(state.categories).toEqual(categories);
  });

  it('should execute fetch categories', () => {
    const store = mockStore({
      categories: [],
    });
    return store.dispatch(loadCategories())
      .then(() => {
        const actions = store.getActions();
        expect(actions[0].type).toEqual('setCategories');
      });
  });
});
