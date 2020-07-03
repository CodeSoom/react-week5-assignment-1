import reducer from './reducer';

import {
  updateSelected,
} from './actions';

describe('reducer', () => {
  describe('updateSeleted', () => {
    it('selected category id를 변경한다.', () => {
    // Given
      const previousState = {
        selected: {
          categoryId: '',
        },
      };
      const id = 1;

      // When
      const newState = reducer(previousState, updateSelected(id));

      // Then
      expect(newState.selected.categoryId).toBe(id);
    });
  });
});
