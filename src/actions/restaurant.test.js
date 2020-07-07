import {
  SET_RESTAURANTS, setRestaurants, loadRestaurants,
} from './restaurant';

import { fetchRestaurants } from '../services/api';

import RESTAURANTS from '../__fixtures__/restaurants.json';

jest.mock('../services/api');

describe('Restaurant Action Creator', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    dispatch.mockClear();
    fetchRestaurants.mockResolvedValue(RESTAURANTS);
  });

  it('setRestaurants', () => {
    // When
    const action = setRestaurants(RESTAURANTS);
    // Then
    expect(action.type).toBe(SET_RESTAURANTS);
    expect(action.payload.restaurants).toBe(RESTAURANTS);
  });

  context('loadRestaurants', () => {
    context('with selectedCategory & selectedRegion', () => {
      it('return restaurants', async () => {
        // When
        function getState() {
          return {
            selectedCategoryId: 1,
            selectedRegionId: 1,
            regions: [{ id: 1, name: 'REGOIN-A' }],
          };
        }
        const action = loadRestaurants();
        await action(dispatch, getState);
        // Then
        expect(fetchRestaurants).toBeCalled();
        expect(dispatch).toBeCalledWith({
          type: SET_RESTAURANTS,
          payload: { restaurants: RESTAURANTS },
        });
      });
    });
    context('without selectedCategory & selectedRegion', () => {
      it('return no restaurants ', async () => {
        // When
        function getState() {
          return {
            selectedCategoryId: null,
            selectedRegionId: null,
          };
        }
        const action = loadRestaurants();
        await action(dispatch, getState);
        // Then
        expect(fetchRestaurants).toBeCalled();
        expect(dispatch).toBeCalledWith({
          type: SET_RESTAURANTS,
          payload: { restaurants: [] },
        });
      });
    });
  });
});
