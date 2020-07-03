import {
  setRegions, setCategories, setRestaurants, checkRegion, checkCategory,
  updateRegions, updateCategories, getRegions, getCategories, getRestaurants,
} from './actions';
import { fetchRegions, fetchCategories, fetchRestaurants } from './services/api';
import { CHECK_SYMBOL } from './utils';

import regions from './__fixtures__/regions';
import categories from './__fixtures__/categories';
import restaurants from './__fixtures__/restaurants';

jest.mock('./services/api');

describe('Action creators', () => {
  const state = {
    regions,
    categories,
    restaurants,
    checked: {
      regionId: 2,
      categoryId: 3,
    },
  };
  const dispatch = jest.fn();
  const getState = () => (state);

  beforeEach(() => {
    dispatch.mockClear();
    fetchRegions.mockClear();
    fetchRegions.mockImplementation(async () => regions);
    fetchCategories.mockClear();
    fetchCategories.mockImplementation(async () => categories);
    fetchRestaurants.mockClear();
    fetchRestaurants.mockImplementation(async () => restaurants);
  });

  it('setRegions', () => {
    // when
    const action = setRegions(regions);
    // then
    expect(action.type).toBe('setRegions');
    expect(action.payload.regions).toBe(regions);
  });

  it('setCategories', () => {
    // when
    const action = setCategories(categories);
    // then
    expect(action.type).toBe('setCategories');
    expect(action.payload.categories).toBe(categories);
  });

  it('setRestaurants', () => {
    // when
    const action = setRestaurants(restaurants);
    // then
    expect(action.type).toBe('setRestaurants');
    expect(action.payload.restaurants).toBe(restaurants);
  });

  it('checkRegion', () => {
    // when
    const action = checkRegion(state.checked.regionId);
    // then
    expect(action.type).toBe('checkRegion');
    expect(action.payload.id).toBe(state.checked.regionId);
  });

  it('checkCategory', () => {
    // when
    const action = checkCategory(state.checked.categoryId);
    // then
    expect(action.type).toBe('checkCategory');
    expect(action.payload.id).toBe(state.checked.categoryId);
  });

  it('updateRegions', () => {
    // when
    const action = updateRegions(1);
    action(dispatch, getState);
    // then
    expect(dispatch).toHaveBeenNthCalledWith(1, {
      type: 'setRegions',
      payload: {
        regions: [{
          id: 1,
          name: `서울${CHECK_SYMBOL}`,
        }, ...regions.slice(1)],
      },
    });
    expect(dispatch).toHaveBeenNthCalledWith(2, {
      type: 'checkRegion',
      payload: { id: 1 },
    });
    expect(dispatch).toHaveBeenNthCalledWith(3, {
      type: 'setRestaurants',
      payload: { restaurants: [] },
    });
  });

  it('getRegions', async () => {
    // when
    const action = getRegions();
    await action(dispatch);
    // then
    expect(fetchRegions).toBeCalled();
    expect(dispatch).toBeCalledWith({
      type: 'setRegions',
      payload: { regions },
    });
  });

  it('getCategories', async () => {
    // when
    const action = getCategories();
    await action(dispatch);
    // then
    expect(fetchCategories).toBeCalled();
    expect(dispatch).toBeCalledWith({
      type: 'setCategories',
      payload: { categories },
    });
  });

  describe('getRestaurants', () => {
    context('with region and category', () => {
      it('get restaurants', async () => {
        // when
        const action = getRestaurants();
        await action(dispatch, getState);
        // then
        expect(fetchRestaurants).toBeCalled();
        expect(dispatch).toBeCalledWith({
          type: 'setRestaurants',
          payload: { restaurants },
        });
      });
    });

    context('without region or category', () => {
      it('do not get restaurants', () => {
        // when
        const action = getRestaurants();
        action(dispatch, () => ({
          ...state,
          checked: {
            ...state.checked,
            regionId: 0,
          },
        }));
        // then
        expect(fetchRestaurants).not.toBeCalled();
      });
    });
  });

  it('updateCategories', async () => {
    // when
    const action = updateCategories(1);
    await action(dispatch, getState);
    // then
    expect(dispatch).toHaveBeenNthCalledWith(1, {
      type: 'setCategories',
      payload: {
        categories: [{
          id: 1,
          name: `한식${CHECK_SYMBOL}`,
        }, ...categories.slice(1)],
      },
    });
    expect(dispatch).toHaveBeenNthCalledWith(2, {
      type: 'checkCategory',
      payload: { id: 1 },
    });
  });
});
