export const ACTION_KEYS = {
  getRegions: 'getRegions',
  setRegion: 'setRegion',
  getCategories: 'getCategories',
  setCategory: 'setCategory',
};

export const getRegions = () => ({ type: ACTION_KEYS.getRegions });

export const setRegion = (region) => ({ type: ACTION_KEYS.setRegion, payload: { region } });

export const getCategories = () => ({ type: ACTION_KEYS.getCategories });

export const setCategory = (category) => ({ type: ACTION_KEYS.setCategory, payload: { category } });
