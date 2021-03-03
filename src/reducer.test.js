import reducer from './reducer';

import {
  setSelectedRegion,
  setSelectedCategory,
} from './actions';

describe('reducer', () => {
  describe('setSelectedRegion', () => {
    it('none ', () => {
      const initialState = {
        regions: [
          { id: 1, name: '서울' },
        ],
        selectedRegion: null,
      };

      const notExistAction = {
        type: 'notExist',
        payload: { },
      };

      const state = reducer(initialState, notExistAction);

      expect(state).toBe(initialState);
    });

    it('changes a selectedRegion', () => {
      const initialState = {
        regions: [
          { id: 1, name: '서울' },
        ],
        selectedRegion: null,
      };

      const state = reducer(initialState, setSelectedRegion('부산'));

      expect(state.selectedRegion).toBe('부산');
    });
  });
  describe('setSelectedCategory', () => {
    it('changes a selectedCategory', () => {
      const initialState = {
        regions: [
          { id: 1, name: '한식' },
        ],
        selectedCategory: null,
      };

      const state = reducer(initialState, setSelectedCategory('일식'));

      expect(state.selectedCategory).toBe('일식');
    });
  });
});
