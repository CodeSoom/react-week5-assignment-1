import { setCategories } from './actions';

import reducer from './reducer';

describe('setCategories', () => {
  it('카테고리가 변경됩니다.', () => {
    const categories = [
      { id: 1, name: '한식' },
    ];

    const initialState = {
      categories: [],
    };

    const state = reducer(initialState, setCategories(categories));

    expect(state.categories).toHaveLength(1);
  });
});
