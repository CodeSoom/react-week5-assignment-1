import categories from './fixtures/cetegories';
import regions from './fixtures/regions';

export function loadCategories() {
  return {
    type: 'loadCategories',
    payload: {
      categories,
    },
  };
}
export function loadRegions() {
  return {
    type: 'loadRegions',
    payload: {
      regions,
    },
  };
}
