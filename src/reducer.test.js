import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import reducer from './reducer';

import { regions, initialState } from '../fixtures/restaurants';

import {
  setRegions,
  loadRegions,
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

  it('should execute fetch regions', () => {
    const store = mockStore({
      regions: [],
    });
    const expectAction = setRegions();

    return store.dispatch(loadRegions())
      .then(() => {
        const actions = store.getActions();
        expect(actions[0].type).toEqual('setRegions');
      });
  });
});
