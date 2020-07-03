import {
  setCategories,
  loadCategories,
} from './actions';

import categories from '../fixtures/categories';

jest.mock('react-redux');
jest.mock('./services/api');

describe('actions', () => {
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
