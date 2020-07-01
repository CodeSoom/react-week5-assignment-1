const check = ({ id, name }, checkedId) => {
  const element = { id, name: name.replace('(v)', '') };
  if (element.id === checkedId) {
    element.name += '(v)';
  }
  return element;
};

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

const checkCategory = (id) => ({
  type: 'checkCategory',
  payload: { id },
});

const updateRegions = (id) => (dispatch, getState) => {
  const { regions } = getState();
  const checkedRegions = regions.map((region) => check(region, id));
  dispatch(setRegions(checkedRegions));
  dispatch(checkRegion(id));
};

export {
  setRegions, setCategories, checkRegion, checkCategory,
  updateRegions,
};
