import reducer from './reducer';

import categories from './fixtures/categories';

import regions from './fixtures/regions';

import { checkCategories, checkRegions, initializeCheckedItem } from './actions';

describe('reducer', () => {
  describe('checkCategories', () => {
    it('changes categories isChecked property', () => {
      const state = reducer({ categories },
        checkCategories({ id: 1, isChecked: false }));

      expect(state.categories[0].isChecked).toBe(true);
    });
  });

  describe('checkRegions', () => {
    it('changes Regions isChecked property', () => {
      const state = reducer({ regions },
        checkRegions({ id: 1, isChecked: false }));

      expect(state.regions[0].isChecked).toBe(true);
    });
  });

  describe('initializeCheckedItem', () => {
    it('initialize previously checked item', () => {
      const checkedCategories = [
        { id: 1, category: '분식', isChecked: true },
        { id: 2, category: '중식', isChecked: true },
      ];

      const state = reducer({ categories: checkedCategories },
        initializeCheckedItem({ id: 1 }));

      const checkedItemsNumber = state.categories.filter(
        (category) => category.isChecked === true,
      ).length;

      expect(checkedItemsNumber).toBe(1);
    });
  });
});
