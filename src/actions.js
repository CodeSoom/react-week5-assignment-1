export function checkCategories({ id, isChecked }) {
  return {
    type: 'checkCategories',
    payload: { id, isChecked },
  };
}

export function checkRegions({ id, isChecked }) {
  return {
    type: 'checkRegions',
    payload: { id, isChecked },
  };
}

export function initializeCheckedCategories({ id }) {
  return {
    type: 'initializeCheckedCategories',
    payload: { id },
  };
}

export function initializeCheckedRegions({ id }) {
  return {
    type: 'initializeCheckedRegions',
    payload: { id },
  };
}
