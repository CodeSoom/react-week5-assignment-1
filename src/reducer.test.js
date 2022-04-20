import reducer from './reducer';

import {
  selectCategory,
  selectRegion,
  setRegions,
  loadRegions,
  setCategories,
  loadCategories,
  setRestaurants,
  loadRestaurants,
} from './actions';

import regions from '../fixture/regions';
import categories from '../fixture/categories';
import restaurants from '../fixture/restaurants';

jest.mock('react-redux');
jest.mock('./services/api');

describe('Reducer', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  context('when call reducer with undefined args', () => {
    it('returns initialState', () => {
      expect(reducer(undefined, {})).toStrictEqual({
        selectCategoryId: undefined,
        categories: [],
        selectRegionId: undefined,
        regions: [],
        restaurants: [],
      });
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

  describe('setRegions', () => {
    const initialState = {
      regions: [],
    };

    it('returns regions', () => {
      expect(reducer(initialState, setRegions({ regions }))).toStrictEqual({
        regions,
      });
    });
  });

  // TODO: mocking redux-thunk
  describe('loadRegions', () => {
    it('called setRegions with regions data', async () => {
      const dispatch = jest.fn();

      await loadRegions()(dispatch);

      expect(dispatch).toBeCalledWith({
        type: 'setRegions',
        payload: {
          regions,
        },
      });
    });
  });

  describe('setCategories', () => {
    const initialState = {
      categories: [],
    };

    it('returns regions', () => {
      expect(reducer(initialState, setCategories({ categories }))).toStrictEqual({
        categories,
      });
    });
  });

  // TODO: mocking redux-thunk
  describe('loadCategories', () => {
    const getState = () => ({
      selectCategoryId: 1,
      selectRegionId: 1,
    });
    it('called setCategories with categories data', async () => {
      const dispatch = jest.fn();
      await loadCategories()(dispatch, getState);

      expect(dispatch).toBeCalledWith({
        type: 'setCategories',
        payload: {
          categories,
        },
      });
    });
  });

  describe('setRestaurants', () => {
    const initialState = {
      restaurants: [],
    };

    it('returns regions', () => {
      expect(reducer(initialState, setRestaurants({ restaurants }))).toStrictEqual({
        restaurants,
      });
    });
  });

  // TODO: mocking redux-thunk
  describe('loadRestaurants', () => {
    const dispatch = jest.fn();

    context('before select category', () => {
      it("doesn't working", async () => {
        await loadRestaurants({ categoryId: 1 })(dispatch);

        expect(dispatch).not.toBeCalled();
      });
    });

    context('before select region', () => {
      it("doesn't working", async () => {
        await loadRestaurants({ regionName: '서울' })(dispatch);

        expect(dispatch).not.toBeCalled();
      });
    });

    context('when select region and category', () => {
      it('called setRestaurants with restaurants data', async () => {
        await loadRestaurants({ regionName: '서울', categoryId: 1 })(dispatch);

        expect(dispatch).toBeCalledWith({
          type: 'setRestaurants',
          payload: {
            restaurants,
          },
        });
      });
    });
  });
});
