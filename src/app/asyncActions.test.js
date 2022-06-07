import createStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import { loadCategories, loadRegions, loadRestaurants } from './asyncActions';
import { findRegion } from './helper';

const middlewares = [thunk];
const mockStore = createStore(middlewares);

jest.mock('./helper');

describe('loadCategories', () => {
  it('execute fetch data then dispatch setCategories', async () => {
    window.fetch = jest.fn();
    window.fetch.mockReturnValue(Promise.resolve({
      json: () => Promise.resolve([{ id: 1, name: '한식' }]),
    }));
    const store = mockStore({ categories: [] });

    await store.dispatch(loadCategories());
    const actions = await store.getActions();

    expect(actions[0].type).toBe('setCategories');
    expect(actions[0].payload.categories).toEqual([{ id: 1, name: '한식' }]);
  });
});

describe('loadRegions', () => {
  it('execute fetch data then dispatch setRegions', async () => {
    window.fetch = jest.fn();
    window.fetch.mockReturnValue(Promise.resolve({
      json: () => Promise.resolve([{ id: 1, name: '서울' }]),
    }));
    const store = mockStore({ regions: [] });

    await store.dispatch(loadRegions());
    const actions = await store.getActions();

    expect(actions[0].type).toBe('setRegions');
    expect(actions[0].payload.regions).toEqual([{ id: 1, name: '서울' }]);
  });
});

describe('loadRestaurants', () => {
  it('execute fetch data then dispatch setRestaurants', async () => {
    window.fetch = jest.fn();
    window.fetch.mockReturnValue(Promise.resolve({
      json: () => Promise.resolve([{
        id: 1,
        categoryId: 1,
        name: '양천주가',
        address: '서울 강남구 123456',
        information: '양천주가 in 서울 강남구 123456',
      }]),
    }));

    findRegion.mockImplementation(() => ({ id: '1', name: '양천주가' }));
    const store = mockStore({ restaurants: [] });

    await store.dispatch(loadRestaurants());
    const actions = await store.getActions();

    expect(actions[0].type).toBe('setRestaurants');
    expect(actions[0].payload.restaurants).toEqual([{
      id: 1,
      categoryId: 1,
      name: '양천주가',
      address: '서울 강남구 123456',
      information: '양천주가 in 서울 강남구 123456',
    }]);
  });
});
