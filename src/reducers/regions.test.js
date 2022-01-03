import reducer from './regions';
import { setRegions, setRegionActiveId } from '../actions';
import { regionsData } from '../fixtures';

describe('regions', () => {
  const initialState = {
    regions: [],
    activeId: -1,
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
      const state = reducer(initialState, setRegionActiveId(2));

      expect(state.activeId).toBe(2);
    });
  });

  describe('예외상황처리', () => {
    it('액션 타입이 존재하지 않으면, 기본 state를 반환한다.', () => {
      const state = reducer(initialState, {});

      expect(state).toEqual(initialState);
    });

    it('초기 state가 undefined이면, 기본 state를 반환한다.', () => {
      const state = reducer(undefined, {});

      expect(state).toEqual(initialState);
    });
  });
});
