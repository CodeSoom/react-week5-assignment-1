import reducer from './reducer';

import {
  setRestaurants,
  markSelectedRegion,
} from './actions';

import {
  regions,
  categories,
  restaurants,
} from '../fixtures/staticData';

describe('Reducer', () => {
  const initialState = {
    regions,
    categories,
    restaurants: [],
  };

  context('with setRestaurants', () => {
    it('returns updated restaurants', () => {
      expect(reducer(initialState, setRestaurants(restaurants))).toEqual({
        ...initialState,
        restaurants,
      });
    });
  });

  context('with markSelectedRegion', () => {
    it('changes selected region', () => {
      expect(reducer(initialState, markSelectedRegion('대전'))).toEqual({
        ...initialState,
        regions: [
          ...initialState.regions.map((region) => {
            if (region.name === '대전') {
              return {
                ...region,
                selected: true,
              };
            }
            return {
              ...region,
              selected: false,
            };
          }),
        ],
      });
    });
  });
});
