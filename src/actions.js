import { fetchCategories } from './services/api';

export function selectRegion(selectedRegion) {
  return {
    type: 'selectRegion',
    payload: {
      selectedRegion,
    },
  };
}

export function selectCategory(selectedCategory) {
  return {
    type: 'selectCategory',
    payload: {
      selectedCategory,
    },
  };
}
