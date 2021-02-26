import fetchMock from 'fetch-mock';

import { loadCategories, loadRegions, loadRestaurants } from './actions';

describe('actions', () => {
  const dispatch = jest.fn();

  describe('loadRegions', () => {
    it('loads region datas from api server and dispatches', async () => {
      fetchMock.getOnce('https://eatgo-customer-api.ahastudio.com/regions', {
        body: { name: '서울' },
      });
      await loadRegions()(dispatch);

      expect(typeof loadRegions()).toBe('function');
      expect(dispatch).toBeCalled();

      fetchMock.restore();
    });
  });

  describe('loadCategories', () => {
    it('loads category datas from api server and dispatches', async () => {
      fetchMock.getOnce('https://eatgo-customer-api.ahastudio.com/categories', {
        body: { name: '한식' },
      });
      await loadCategories()(dispatch);

      expect(typeof loadCategories()).toBe('function');
      expect(dispatch).toBeCalled();

      fetchMock.restore();
    });
  });

  describe('loadRestaurants', () => {
    const url = 'https://eatgo-customer-api.ahastudio.com/restaurants?region=서울&category=1';

    context('with response.ok', () => {
      it('loads restaurant datas from api server and dispatches', async () => {
        fetchMock.getOnce(url, {
          status: 200,
          body: { name: '양천주가' },
        });
        await loadRestaurants('서울', 1)(dispatch);

        expect(typeof loadRestaurants()).toBe('function');
        expect(dispatch).toBeCalledTimes(3);

        fetchMock.restore();
      });
    });
    context('with not response.ok', () => {
      it('returns empty array', async () => {
        fetchMock.getOnce(url, {
          status: 500,
        });
        await loadRestaurants('서울', 1)(dispatch);
        expect(typeof loadRestaurants()).toBe('function');
        expect(dispatch).toBeCalled();

        fetchMock.restore();
      });
    });
  });
});
