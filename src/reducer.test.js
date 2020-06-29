import reducer from './reducer';

import { selectRegion, setRegions, selectCategory } from './actions';

import { regions } from '../fixtures/regions';

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

  describe('SET_REGIONS', () => {
    it('지역리스트가 변경된다.', () => {
      const initialState = {
        regions: [],
      };
      const state = reducer(initialState, setRegions(regions));
      expect(state.regions).toHaveLength(3);
    });
  });

  describe('SELECT_CATEGORY', () => {
    it('선택된 음식점이 변경된다.', () => {
      const state = reducer(
        {
          selectedCategory: '',
        },
        selectCategory(1),
      );
      expect(state.selectedCategory).toBe(1);
    });
  });
});
