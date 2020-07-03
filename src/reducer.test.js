import reducer from './reducer';

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
      const newState = reducer(previousState, {
        type: 'updateSelected',
        payload: {
          categoryId: id,
        },
      });

      // Then
      expect(newState.selected.categoryId).toBe(id);
    });
  });
});
