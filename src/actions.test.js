import {
  setCategories,
} from './actions';

import categories from '../fixtures/categories';

describe('actions', () => {
  test('setCategories', () => {
    const action = setCategories(categories);

    expect(action.type).toBe('setCategories');
    expect(action.payload.categories).toBe(categories);
  });
});
