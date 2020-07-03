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
      const newState = reducer(previousState, updateSelected('categoryId', id));

      // Then
      expect(newState.selected.categoryId).toBe(id);
    });

    it('selected region을 변경한다.', () => {
    // Given
      const previousState = {
        selected: {
          region: '',
        },
      };
      const region = '서울';

      // When
      const newState = reducer(previousState, updateSelected('region', region));

      // Then
      expect(newState.selected.region).toBe(region);
    });
  });
});
