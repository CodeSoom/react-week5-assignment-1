import { getCategoriesThunk, getRegionsThunk, getRestaurantsThunk } from './actions';
import { categories, regions, restaurants } from './fixtures/mockData';
import { getRegions, getCategories, getRestaurants } from './services/api';

jest.mock('./services/api');

describe('actions', () => {
  const dispatch = jest.fn();
  beforeEach(() => {
    jest.clearAllMocks();
  });
  describe('get regions', () => {
    context('when status is success', () => {
      it('can get regions', async () => {
        getRegions.mockImplementationOnce(() => Promise.resolve(regions));

        const thunk = getRegionsThunk();
        await thunk(dispatch);

        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch).toHaveBeenCalledWith({ type: 'getRegions' });
        expect(dispatch).toHaveBeenCalledWith({ type: 'getRegionsSuccess', payload: regions });
      });
    });

    context('when status is fail', () => {
      it('can not get regions', async () => {
        getRegions.mockImplementationOnce(() => Promise.reject(Error('getRegions')));

        const thunk = getRegionsThunk();
        await thunk(dispatch);

        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch).toHaveBeenCalledWith({ type: 'getRegions' });
        expect(dispatch).toHaveBeenCalledWith({ type: 'getRegionsFailure', payload: Error('getRegions') });
      });
    });
  });
  describe('get categories', () => {
    context('when status is success', () => {
      it('can get categories', async () => {
        getCategories.mockImplementationOnce(() => Promise.resolve(categories));

        const thunk = getCategoriesThunk();
        await thunk(dispatch);

        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch).toHaveBeenCalledWith({ type: 'getCategories' });
        expect(dispatch).toHaveBeenCalledWith({ type: 'getCategoriesSuccess', payload: categories });
      });
    });
    context('when status is fail', () => {
      it('can not get categories', async () => {
        getCategories.mockImplementationOnce(() => Promise.reject(Error('getCategories')));

        const thunk = getCategoriesThunk();
        await thunk(dispatch);

        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch).toHaveBeenCalledWith({ type: 'getCategories' });
        expect(dispatch).toHaveBeenCalledWith({ type: 'getCategoriesFailure', payload: Error('getCategories') });
      });
    });
  });

  describe('get restaurants', () => {
    context('when status is success', () => {
      it('can get restaurants', async () => {
        getRestaurants.mockImplementationOnce(() => Promise.resolve(restaurants));

        const thunk = getRestaurantsThunk({ regionName: '서울', categoryId: 1 });
        await thunk(dispatch);

        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch).toHaveBeenCalledWith({ type: 'getRestaurants' });
        expect(dispatch).toHaveBeenCalledWith({ type: 'getRestaurantsSuccess', payload: restaurants });
      });
    });

    context('when status is fail', () => {
      it('can not get restaurants', async () => {
        getRestaurants.mockImplementationOnce(() => Promise.reject(Error('getRestaurants')));

        const thunk = getRestaurantsThunk({ regionName: '서울', categoryId: 1 });
        await thunk(dispatch);

        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch).toHaveBeenCalledWith({ type: 'getRestaurants' });
        expect(dispatch).toHaveBeenCalledWith({ type: 'getRestaurantsFailure', payload: Error('getRestaurants') });
      });
    });
  });
});
