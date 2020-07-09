import {
  SET_CATEGORIES, SET_SELECTED_CATEGORY_ID,
  setCategories, loadCategories, setSelectedCategoryId,
} from './category';

import { fetchCategories } from '../services/api';

import CATEGORIES from '../__fixtures__/categories.json';

jest.mock('../services/api');

describe('Category Action Creator', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    dispatch.mockClear();
    fetchCategories.mockResolvedValue(CATEGORIES);
  });

  it('setCategories', () => {
    // When
    const action = setCategories(CATEGORIES);
    // Then
    expect(action.type).toBe(SET_CATEGORIES);
    expect(action.payload.categories).toBe(CATEGORIES);
  });

  it('loadCategories', async () => {
    // When
    const action = loadCategories();
    await action(dispatch);
    // Then
    expect(fetchCategories).toBeCalled();
    expect(dispatch).toBeCalledWith({
      type: SET_CATEGORIES,
      payload: { categories: CATEGORIES },
    });
  });

  it('setSelectedCategoryId', async () => {
    // When
    const action = setSelectedCategoryId(CATEGORIES[0].id);
    // Then
    expect(action.type).toBe(SET_SELECTED_CATEGORY_ID);
    expect(action.payload.selectedCategoryId).toBe(CATEGORIES[0].id);
  });
});
