import reducer from './reducer';

import { selectRegion, setRegionList } from './action';

describe('Reducer', () => {
  it('setRegionList', () => {
    const initialState = {
      regionList: [],
    };

    const regionList = [
      {
        id: 1,
        name: '서울',
      },
    ];

    const state = reducer(
      initialState, setRegionList(regionList),
    );
    expect(state.regionList).toHaveLength(1);
  });

  it('selects Region', () => {
    const initialState = {
      id: '',
    };

    const state = reducer(
      initialState, selectRegion(1),
    );
    expect(state.id).toBe(1);
  });
});
