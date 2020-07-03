import {
  setRegions,
  loadRegions,
  setCategories,
  loadCategories,
} from './actions';

import categories from '../fixtures/categories';
import regions from '../fixtures/regions';

jest.mock('react-redux');
jest.mock('./services/api');

describe('actions', () => {
  test('setRegions', () => {
    const action = setRegions(regions);

    expect(action.type).toBe('setRegions');
    expect(action.payload.regions).toBe(regions);
  });

  test('loadRegions', async () => {
    const dispatch = jest.fn();

    await loadRegions()(dispatch);

    expect(dispatch).toBeCalledTimes(1);
  });

  test('setCategories', () => {
    const action = setCategories(categories);

    expect(action.type).toBe('setCategories');
    expect(action.payload.categories).toBe(categories);
  });

  test('loadCategories', async () => {
    const dispatch = jest.fn();

    await loadCategories()(dispatch);

    expect(dispatch).toBeCalledTimes(1);
  });
});
