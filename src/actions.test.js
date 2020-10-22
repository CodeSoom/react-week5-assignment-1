import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import { loadRestaurants, setRestaurants } from './actions';
import { categoriesFixture } from '../fixtures/fixtures';
import { fetchRestaurants } from './services/api';

jest.mock('./services/api');

const middlewares = [thunk]; // NOTE: thunk 미들웨어 추가
const mockStore = configureStore(middlewares);

describe('actions', () => {
  it('async "loadRestaurants" call test', async () => {
    // NOTE: mockResolvedValue 비동기 테스트에서 비동기 함수를 모의하는 데 유용
    fetchRestaurants.mockResolvedValue(categoriesFixture);

    const store = mockStore({});

    await store.dispatch(loadRestaurants('categories'));

    const actions = store.getActions();

    expect(actions[0]).toEqual(setRestaurants({ type: 'categories', info: categoriesFixture }));
  });
});
