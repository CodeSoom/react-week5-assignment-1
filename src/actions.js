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

export function checkCategory(id) {
  return {
    type: 'checkCategory',
    payload: {
      checkedCategory: id,
    },
  };
}

export function checkRegion(id) {
  return {
    type: 'checkRegion',
    payload: {
      checkedRegion: id,
    },
  };
}
