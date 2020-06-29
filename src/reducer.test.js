import reducer from './reducer';

import { selectRegion } from './actions';

describe('reducer', () => {
  it('액션이 없으면 initialState를 반환한다.', () => {
    const expectState = {
      regions: [],
    };
    const state = reducer(
      {
        regions: [],
      },
      {},
    );

    expect(state).toEqual(expectState);
  });

  describe('SELECT_REGION', () => {
    it('선택된 지역이 변경된다.', () => {
      const state = reducer(
        {
          selectedRegion: '',
        },
        selectRegion('서울'),
      );
      expect(state.selectedRegion).toBe('서울');
    });
  });
});
