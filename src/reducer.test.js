import reducer from './reducer';

import { selectRegion } from './actions';

describe('reducer', () => {
  const initialState = {
    selectedRegionId: 0,
    regions: [
      { id: 1, name: '서울' },
      { id: 2, name: '대전' },
      { id: 3, name: '대구' },
      { id: 4, name: '부산' },
      { id: 5, name: '광주' },
    ],
  };

  it('init state', () => {
    const state = reducer();
    expect(state).toStrictEqual(initialState);
  });

  it('unknown reducer', () => {
    const state = reducer(initialState, {
      type: 'unknownAction',
      payload: {
        name: 'unknown',
      },
    });
    expect(initialState).toBe(state);
  });

  describe('select region', () => {
    const clickedRegionId = 1;
    const state = reducer(initialState, selectRegion(clickedRegionId));

    expect(state.selectedRegionId).toBe(clickedRegionId);
  });
});
