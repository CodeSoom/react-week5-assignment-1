import reducer from './regions';
import { setRegions } from '../actions';

describe('regions', () => {
  const initialState = {
    regions: [],
  };

  describe('setRegions', () => {
    it('새로운 지역을 저장한다.', () => {
      const regions = [{ id: 1, name: '서울' }];

      const state = reducer(initialState, setRegions(regions));

      expect(regions).toHaveLength(1);
      expect(state.regions[0].id).toBe(1);
      expect(state.regions[0].name).toBe('서울');
    });
  });
});
