import reducer from './reducer';

import {
  selectCategory,
  selectAddress,
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

    it('returns select cateogry id', () => {
      expect(reducer(initialState, selectCategory({ selectCategoryId: 1 }))).toStrictEqual({
        selectCategoryId: 1,
      });
    });
  });

  describe('selectAddress', () => {
    const initialState = {
      selectCategoryId: undefined,
    };

    it('returns select adress id', () => {
      expect(reducer(initialState, selectAddress({ selectAddressId: 1 }))).toStrictEqual({
        selectAddressId: 1,
      });
    });
  });
});
