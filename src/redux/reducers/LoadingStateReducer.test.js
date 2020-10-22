import LoadingStateReducer from './LoadingStateReducer';

import {
  updateLoading,
} from '../actions';

describe('LoadingStateReducer', () => {
  describe('updateLoading', () => {
    it('changes loading', () => {
      const state = LoadingStateReducer({
        loading: false,
      }, updateLoading(true));

      expect(state.loading).toBe(true);
    });
  });

  it('returns initial state when state is undefined', () => {
    const initialState = {
      loading: false,
    };

    expect(LoadingStateReducer()).toEqual(initialState);
  });
});
