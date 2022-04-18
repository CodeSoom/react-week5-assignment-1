import reducer from './reducer';

import {
  selectCategory,
  selectRegion,
} from './actions';

jest.mock('react-redux');

describe('Reducer', () => {
  it('returns initialState', () => {
    expect(reducer(undefined, {})).toMatchObject({
      selectCategoryId: undefined,
      categories: [],
      selectRegionId: undefined,
      regions: [],
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

  describe('selectRegion', () => {
    const initialState = {
      selectRegionId: undefined,
    };

    it('returns select adress id', () => {
      expect(reducer(initialState, selectRegion({ selectRegionId: 1 }))).toStrictEqual({
        selectRegionId: 1,
      });
    });
  });
});
