import {
  setCategories, setFilter, setRegions, setRestaurants,
} from './actions';
import reducer, { initialState } from './reducer';

describe('reducer', () => {
  it('returns initialState', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  context('when setRegion is dispatched', () => {
    it('returns state with new regions', () => {
      const regions = [{ id: 1, name: '서울' }];

      expect(reducer(undefined, setRegions(regions)).regions).toEqual(regions);
    });
  });

  context('when setCategories is dispatched', () => {
    it('returns state with new categories', () => {
      const categories = [{ id: 1, name: '한식' }];

      expect(reducer(undefined, setCategories(categories)).categories).toEqual(categories);
    });
  });

  context('when setFilter is dispatched', () => {
    it('returns state with new filter', () => {
      const filter = { region: 1, category: 1 };

      expect(reducer(undefined, setFilter(filter)).filter).toEqual(filter);
    });
  });

  context('when setRestaurants is dispatched', () => {
    it('returns state with new restaurants', () => {
      const restaurants = [{ id: 1, name: '서울식당' }];

      expect(reducer(undefined, setRestaurants(restaurants)).restaurants).toEqual(restaurants);
    });
  });
});
