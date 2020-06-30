import reducer from './reducer';

import { setCategories } from './actions';

describe('reducer', () => {
  const testCategories = [
    { id: 1, name: '한식' },
    { id: 2, name: '중식' },
  ];

  context('when reducer is executed first time', () => {
    it('returns initial state', () => {
      const state = reducer(undefined, 'testAction');

      expect(state.categories).toHaveLength(0);
    });
  });

  context('when action type is setCategories', () => {
    it('gets new categories', () => {
      const state = reducer(undefined, setCategories(testCategories));

      expect(state.categories).toHaveLength(2);
    });
  });
});
