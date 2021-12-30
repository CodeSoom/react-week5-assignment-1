import reducer from './regions';
import { setRegions } from '../actions';
import { regionsData } from '../fixtures';

describe('regions', () => {
  const initialState = {
    regions: [],
  };

  describe('setRegions', () => {
    it('새로운 지역을 저장한다.', () => {
      const state = reducer(initialState, setRegions(regionsData));

      expect(state.regions).toHaveLength(2);
      expect(state.regions[0].id).toBe(1);
      expect(state.regions[0].name).toBe('서울');
    });
  });

  describe('setRegionActiveId', () => {
    it('현재 선택된 지역의 id값이 activeId가 된다.', () => {
      const state = reducer(initialState, {
        type: 'setRegionActiveId',
        payload: {
          activeId: 2,
        },
      });

      expect(state.activeId).toBe(2);
    });
  });
});
