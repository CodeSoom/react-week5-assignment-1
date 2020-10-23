import reducer from './reducer';

import { updateFilter } from './actions';

describe('reducer', () => {
  context('without state nor action', () => {
    const initialState = {
      filter: {
        region: '',
        categoryId: 0,
      },
    };
    it('returns state', () => {
      expect(reducer()).toEqual(initialState);
    });
  });

  context('with action', () => {
    it('updates filter', () => {
      const previousState = {
        filter: {
          region: '서울',
          categoryId: 1,
        },
      };
      const state = reducer(
        previousState,
        updateFilter({ filter: { region: '서울' } }),
      );
      expect(state.filter.region).toBe('서울');
    });
  });
});
