import reducer from './reducer';

import {
  setLocation,
  setCategory,
} from './action';

describe('reducer', () => {
  describe('setLocation', () => {
    it('changes location', () => {
      const initialState = {
        location: { id: '', name: '' },
      };

      const state = reducer(initialState, setLocation({ id: 1, name: '서울' }));

      expect(state.location.id).toBe(1);
      expect(state.location.name).toBe('서울');
    });
  });

  describe('setCategory', () => {
    it('changes cagetory', () => {
      const initialState = {
        category: { id: '', name: '' },
      };

      const state = reducer(initialState, setCategory({ id: 1, name: '한식' }));

      expect(state.category.id).toBe(1);
      expect(state.category.name).toBe('한식');
    });
  });
});
