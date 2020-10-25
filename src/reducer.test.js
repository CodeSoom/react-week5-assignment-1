import reducer from './reducer';

import {
  setRegions,
  setFoods,
} from './actions';

import regions from '../fixtures/regions';

describe('reducer', () => {
  describe('setRegions', () => {
    it('changes regions array', () => {
      const initialState = {
        regions: [],
      };
      const state = reducer(initialState, setRegions(regions)); 
   
      expect(state.regions).not.toHaveLength(0);
    });
  });

  describe('setFoods', () => {
    it('changes foods', () => {
      const foods = [
        {
          id: 1, name:'한식',
        },
      ];
      const initialState = {
        foods: [],
      };
      const state = reducer(initialState, setFoods(foods));

      expect(state.foods).toHaveLength(1);
    });
  });
});