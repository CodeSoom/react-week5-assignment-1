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
  setLoading,
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
        loading: false,
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

  describe('setLoading', () => {
    const initialState = {
      loading: false,
    };

    it('returns loading', () => {
      expect(reducer(initialState, setLoading())).toStrictEqual({
        loading: true,
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

  describe('loadRegions', () => {
    it('calls setRegions with regions data', async () => {
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

  describe('loadCategories', () => {
    it('calls setCategories with categories data', async () => {
      const dispatch = jest.fn();
      await loadCategories()(dispatch);

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
        loading: false,
      });
    });
  });

  describe('loadRestaurants', () => {
    const dispatch = jest.fn();

    context('without select category', () => {
      const getState = () => ({
        selectRegionId: 1,
      });

      it('returns empty restaurant', async () => {
        await loadRestaurants()(dispatch, getState);

        expect(dispatch).toBeCalledWith({
          type: 'setRestaurants',
          payload: {
            restaurants: [],
          },
        });
      });
    });

    context('without select region', () => {
      const getState = () => ({
        selectCategoryId: 1,
      });

      it('returns empty restaurant', async () => {
        await loadRestaurants()(dispatch, getState);

        expect(dispatch).toBeCalledWith({
          type: 'setRestaurants',
          payload: {
            restaurants: [],
          },
        });
      });
    });

    context('without regions', () => {
      const getState = () => ({
        selectRegionId: 1,
        selectCategoryId: 1,
      });

      it('returns empty restaurant', async () => {
        await loadRestaurants()(dispatch, getState);

        expect(dispatch).toBeCalledWith({
          type: 'setRestaurants',
          payload: {
            restaurants: [],
          },
        });
      });
    });

    context('when select region id not exist', () => {
      const getState = () => ({
        selectRegionId: 1,
        selectCategoryId: 1,
        regions: [
          { id: 2, name: '서울' },
        ],
      });

      it('returns empty restaurant', async () => {
        await loadRestaurants()(dispatch, getState);

        expect(dispatch).toBeCalledWith({
          type: 'setRestaurants',
          payload: {
            restaurants: [],
          },
        });
      });
    });

    context('with select region id and select category id', () => {
      const getState = () => ({
        selectRegionId: 1,
        selectCategoryId: 1,
        regions: [
          { id: 1, name: '서울' },
        ],
      });

      it('calls setRestaurants with restaurants data', async () => {
        await loadRestaurants()(dispatch, getState);

        expect(dispatch).toBeCalledTimes(2);

        expect(dispatch).toBeCalledWith({
          type: 'setLoading',
        });

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
