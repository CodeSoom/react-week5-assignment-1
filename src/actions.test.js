import {
  setRegions, setCategories, setRestaurants, checkRegion, checkCategory,
  updateRegions, updateCategories,
} from './actions';

import regionsFixture from './__fixtures__/regions';
import categoriesFixture from './__fixtures__/categories';
import restaurantsFixture from './__fixtures__/restaurants';

describe('Action creators', () => {
  const dispatch = jest.fn();
  const getState = () => ({
    regions: regionsFixture,
    categories: categoriesFixture,
  });

  beforeEach(() => {
    dispatch.mockClear();
  });

  it('setRegions', () => {
    // given
    const regions = regionsFixture;
    // when
    const action = setRegions(regions);
    // then
    expect(action.type).toBe('setRegions');
    expect(action.payload.regions).toBe(regions);
  });

  it('setCategories', () => {
    // given
    const categories = categoriesFixture;
    // when
    const action = setCategories(categories);
    // then
    expect(action.type).toBe('setCategories');
    expect(action.payload.categories).toBe(categories);
  });

  it('setRestaurants', () => {
    // given
    const restaurants = restaurantsFixture;
    // when
    const action = setRestaurants(restaurants);
    // then
    expect(action.type).toBe('setRestaurants');
    expect(action.payload.restaurants).toBe(restaurants);
  });

  it('checkRegion', () => {
    // given
    const id = 1;
    // when
    const action = checkRegion(id);
    // then
    expect(action.type).toBe('checkRegion');
    expect(action.payload.id).toBe(id);
  });

  it('checkCategory', () => {
    // given
    const id = 1;
    // when
    const action = checkCategory(id);
    // then
    expect(action.type).toBe('checkCategory');
    expect(action.payload.id).toBe(id);
  });

  it('updateRegions', () => {
    // given
    const id = 1;

    // when
    const action = updateRegions(id);
    action(dispatch, getState);
    // then
    expect(dispatch).toHaveBeenNthCalledWith(1, {
      type: 'setRegions',
      payload: { regions: [{ id, name: '서울(v)' }, ...regionsFixture.slice(1)] },
    });
    expect(dispatch).toHaveBeenNthCalledWith(2, {
      type: 'checkRegion',
      payload: { id },
    });
    expect(dispatch).toHaveBeenNthCalledWith(3, {
      type: 'setRestaurants',
      payload: { restaurants: [] },
    });
  });

  it('updateCategories', () => {
    // given
    const id = 1;
    // when
    const action = updateCategories(id);
    action(dispatch, getState);
    // then
    expect(dispatch).toHaveBeenNthCalledWith(1, {
      type: 'setCategories',
      payload: { categories: [{ id, name: '한식(v)' }, ...categoriesFixture.slice(1)] },
    });
    expect(dispatch).toHaveBeenNthCalledWith(2, {
      type: 'checkCategory',
      payload: { id },
    });
    expect(dispatch).toHaveBeenNthCalledWith(3, {
      type: 'setRestaurants',
      payload: { restaurants: restaurantsFixture },
    });
  });
});
