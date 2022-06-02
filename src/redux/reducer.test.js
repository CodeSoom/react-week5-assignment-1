import reducer from './reducer';

import {
  setErrorMessage,
  setRegions,
} from './actions';

import regions from '../../fixture/regions';

describe('reducer', () => {
  test('setRegions', () => {
    const initialState = {
      regions: [],
    };

    const state = reducer(initialState, setRegions(regions));

    expect(state.regions).toHaveLength(regions.length);
  });

  test('setErrorMessage', () => {
    const initialState = {
      errorMessage: null,
    };

    const state = reducer(initialState, setErrorMessage('지역 목록을 가져오지 못했어요.'));

    expect(state.errorMessage).toBe('지역 목록을 가져오지 못했어요. 잠시 후 다시 시도해주세요');
  });

  test('action이 undefined면 initialState를 반환한다', () => {
    const initialState = {
      regions: [],
      errorMessage: null,
    };
    const state = reducer(initialState, undefined);

    expect(state).toEqual(initialState);
  });
});
