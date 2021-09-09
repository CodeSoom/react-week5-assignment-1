import reducer from './reducer';

import updateField from './actions';

describe('reducer', () => {
  describe('updateField', () => {
    it('updates store field', () => {
      const previousState = {
        categories: [],
      };

      const categoriesData = [
        { id: 1, name: '한식' },
        { id: 2, name: '중식' },
      ];

      const nextState = reducer(
        previousState,
        updateField({
          field: 'categories',
          value: categoriesData,
        }),
      );

      expect(nextState.categories).toBe(categoriesData);
    });
  });
});
