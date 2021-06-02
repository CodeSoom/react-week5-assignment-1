import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import { loadCategories, loadRegions } from './asyncActions';
import { setCategories, setRegions } from './groupsSlice';

jest.mock('../servies/api');

describe('asyncActions', () => {
  const middlewares = [thunk];
  const mockStore = configureStore(middlewares);

  it('fetches categories when being dispatched', () => {
    const store = mockStore({});
    return store.dispatch(loadCategories())
      .then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual(setCategories([
          { id: 1, name: '한식' },
          { id: 2, name: '중식' },
          { id: 3, name: '일식' },
          { id: 4, name: '양식' },
          { id: 5, name: '분식' },
        ]));
      });
  });

  it('fetches regions when being dispatched', () => {
    const store = mockStore({});
    return store.dispatch(loadRegions())
      .then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual(setRegions([
          { id: 1, name: '서울' },
          { id: 2, name: '대전' },
          { id: 3, name: '대구' },
          { id: 4, name: '부산' },
          { id: 5, name: '광주' },
          { id: 6, name: '강원도' },
        ]));
      });
  });
});
