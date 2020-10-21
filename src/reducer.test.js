import reducer from './reducer';

import categories from './fixtures/categories';

import regions from './fixtures/categories';

import { checkCategories } from './actions';

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
        checkCategories({ id: 1, isChecked: false }));

      expect(state.regions[0].isChecked).toBe(true);
    });
  });
});
