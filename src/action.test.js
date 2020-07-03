import configureStore from 'redux-mock-store';

import thunk from 'redux-thunk';

import {
  loadRegions,
  setInitRegions,
  loadCategories,
  setInitCategories,
  loadRestaurants,
  setRestaurants,
} from './action';

import { regions, categories, restaurants } from '../__fixture__/data';

import { fetchRegions, fetchCategories } from './services/api';

jest.mock('./services/api');

describe('acton', () => {
  describe('loadRegions', () => {
    const dispatch = jest.fn();

    beforeEach(() => {
      dispatch.mockClear();
    });

    context('when successfully fetch data', () => {
      beforeEach(() => {
        fetchRegions.mockResolvedValue(regions);
      });

      it('dispatch setInitRegions', async () => {
        await loadRegions()(dispatch);

        expect(dispatch).toBeCalledWith(setInitRegions(regions));
      });
    });

    context('when fail to fetch data', () => {
      beforeEach(() => {
        fetchRegions.mockRejectedValue(new Error('some error'));
      });

      it('dispatch setInitRegions', async () => {
        await loadRegions()(dispatch);

        expect(dispatch).not.toBeCalled();
      });
    });
  });

  describe('loadCategories', () => {
    const dispatch = jest.fn();

    beforeEach(() => {
      dispatch.mockClear();
    });

    context('when successfully fetch data', () => {
      beforeEach(() => {
        fetchCategories.mockResolvedValue(categories);
      });

      it('dispatch loadCategories', async () => {
        await loadCategories()(dispatch);

        expect(dispatch).toBeCalledWith(setInitCategories(categories));
      });
    });

    context('when fail to fetch data', () => {
      beforeEach(() => {
        fetchCategories.mockRejectedValue(new Error('some error'));
      });

      it('dispatch loadCategories', async () => {
        await loadCategories()(dispatch);

        expect(dispatch).not.toBeCalled();
      });
    });
  });
});

// describe('acton', () => {
//   const middlewares = [thunk];
//   const mockStore = configureStore(middlewares);

//   describe('loadRegions', () => {
//     const store = mockStore({});

//     it('load Regions', () => {
//       onFetch(regions);

//       return store.dispatch(loadRegions()).then(() => {
//         const actions = store.getActions();
//         expect(actions[0]).toEqual(setInitRegions(regions));
//       });
//     });
//   });

//   describe('loadCategories', () => {
//     const store = mockStore({});

//     it('load Categories', () => {
//       onFetch(categories);

//       return store.dispatch(loadCategories()).then(() => {
//         const actions = store.getActions();
//         expect(actions[0]).toEqual(setInitCategories(categories));
//       });
//     });
//   });

//   describe('loadRestaurants', () => {
//     const store = mockStore({});

//     it('load Categories', () => {
//       onFetch(restaurants);

//       return store.dispatch(loadRestaurants()).then(() => {
//         const actions = store.getActions();
//         expect(actions[0]).toEqual(setRestaurants(restaurants));
//       });
//     });
//   });
// });
