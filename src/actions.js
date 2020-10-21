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

export function initializeCheckedItem() {
  return {
    type: 'initializeCheckedItem',
  };
}
