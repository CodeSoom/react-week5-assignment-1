import reducer from './reducer';

import {
  setRegions,
} from './actions';

describe('reducer', () => {
  const initialRestaurant = {
    name: '',
    category: '',
    address: '',
  }

  const initialState = {
    newId: 100,
    restaurants: [],
    restaurant: initialRestaurant,
    categories: [],
    regions: [],
  }

  describe('setRegions', () => {
    it('초기값으로 지역을 모두 셋팅한다.', () => {
      const state = reducer(initialState, setRegions());
      const length = state.regions.length;

      // expect(length).toBe(11);
    });
  });
});
