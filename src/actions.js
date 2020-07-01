const setRegions = (regions) => ({
  type: 'setRegions',
  payload: { regions },
});

const setCategories = (categories) => ({
  type: 'setCategories',
  payload: { categories },
});

const checkRegion = (id) => ({
  type: 'checkRegion',
  payload: { id },
});

export { setRegions, setCategories, checkRegion };
