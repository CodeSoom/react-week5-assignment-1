import reducer from './reducer';

import categories from './fixtures/categories';

import regions from './fixtures/regions';

import {
  checkCategories,
  checkRegions,
  initializeCheckedCategories,
  initializeCheckedRegions,
} from './actions';

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
    it('initialize previously checked categories', () => {
      const checkedCategories = [
        { id: 1, category: '분식', isChecked: true },
        { id: 2, category: '중식', isChecked: true },
      ];

      const state = reducer({ categories: checkedCategories },
        initializeCheckedCategories({ id: 1 }));

      const checkedItemsNumber = state.categories.filter(
        (category) => category.isChecked === true,
      ).length;

      expect(checkedItemsNumber).toBe(1);
    });

    it('initialize previously checked regions', () => {
      const checkedRegions = [
        { id: 1, region: '서울', isChecked: true },
        { id: 2, region: '대구', isChecked: true },
      ];

      const state = reducer({ regions: checkedRegions },
        initializeCheckedRegions({ id: 1 }));

      const checkedItemsNumber = state.regions.filter(
        (region) => region.isChecked === true,
      ).length;

      expect(checkedItemsNumber).toBe(1);
    });
  });
});
