import reducer from './reducer';

import {
  selectCategory,
} from './actions';

jest.mock('react-redux');

describe('Reducer', () => {
  it('returns initialState', () => {
    expect(reducer(undefined, {})).toMatchObject({
      selectCategoryId: undefined,
      categories: [],
    });
  });

  describe('selectCateogry', () => {
    const initialState = {
      selectCategoryId: undefined,
    };

    it('returns categories and select cateogry id', () => {
      expect(reducer(initialState, selectCategory({ selectCategoryId: 1 }))).toStrictEqual({
        selectCategoryId: 1,
      });
    });
  });
});
