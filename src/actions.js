import { fetchCategories } from './services/api';

export function selectRegion(selectedRegion) {
  return {
    type: 'selectRegion',
    payload: {
      selectedRegion,
    },
  };
}

export function blabla() {
  // TODO:
}
