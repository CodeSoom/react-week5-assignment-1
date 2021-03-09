import { getRegions, getCategories, getRestaurants } from './actions';
import { categories, regions, restaurants } from './fixtures/mockData';
import { getRegionsApi, getCategoriesApi, getRestaurantsApi } from './services/api';

jest.mock('./services/api');

describe('actions', () => {
  const dispatch = jest.fn();
  beforeEach(() => {
    jest.clearAllMocks();
  });
  describe('getRegions', () => {
    context('when status is success', () => {
      it('can get regions', async () => {
        getRegionsApi.mockImplementationOnce(() => Promise.resolve(regions));

        const thunk = getRegions();
        await thunk(dispatch);

        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch).toHaveBeenCalledWith({ type: 'getRegions' });
        expect(dispatch).toHaveBeenCalledWith({ type: 'getRegionsSuccess', payload: regions });
      });
    });

    context('when status is fail', () => {
      it('can not get regions', async () => {
        getRegionsApi.mockImplementationOnce(() => Promise.reject(Error('getRegions')));

        const thunk = getRegions();
        await thunk(dispatch);

        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch).toHaveBeenCalledWith({ type: 'getRegions' });
        expect(dispatch).toHaveBeenCalledWith({ type: 'getRegionsFailure', payload: Error('getRegions') });
      });
    });
  });
  describe('getCategories', () => {
    context('when status is success', () => {
      it('can get categories', async () => {
        getCategoriesApi.mockImplementationOnce(() => Promise.resolve(categories));

        const thunk = getCategories();
        await thunk(dispatch);

        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch).toHaveBeenCalledWith({ type: 'getCategories' });
        expect(dispatch).toHaveBeenCalledWith({ type: 'getCategoriesSuccess', payload: categories });
      });
    });
    context('when status is fail', () => {
      it('can not get categories', async () => {
        getCategoriesApi.mockImplementationOnce(() => Promise.reject(Error('getCategories')));

        const thunk = getCategories();
        await thunk(dispatch);

        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch).toHaveBeenCalledWith({ type: 'getCategories' });
        expect(dispatch).toHaveBeenCalledWith({ type: 'getCategoriesFailure', payload: Error('getCategories') });
      });
    });
  });

  describe('getRestaurants', () => {
    context('when status is success', () => {
      it('can get restaurants', async () => {
        getRestaurantsApi.mockImplementationOnce(() => Promise.resolve(restaurants));

        const thunk = getRestaurants({ regionName: '서울', categoryId: 1 });
        await thunk(dispatch);

        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch).toHaveBeenCalledWith({ type: 'getRestaurants' });
        expect(dispatch).toHaveBeenCalledWith({ type: 'getRestaurantsSuccess', payload: restaurants });
      });
    });

    context('when status is fail', () => {
      it('can not get restaurants', async () => {
        getRestaurantsApi.mockImplementationOnce(() => Promise.reject(Error('getRestaurants')));

        const thunk = getRestaurants({ regionName: '서울', categoryId: 1 });
        await thunk(dispatch);

        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch).toHaveBeenCalledWith({ type: 'getRestaurants' });
        expect(dispatch).toHaveBeenCalledWith({ type: 'getRestaurantsFailure', payload: Error('getRestaurants') });
      });
    });
  });
});
