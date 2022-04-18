export function selectCategory({ selectCategoryId }) {
  return {
    type: 'selectCategory',
    payload: {
      selectCategoryId,
    },
  };
}

export function selectAddress({ selectAddressId }) {
  return {
    type: 'selectAddress',
    payload: {
      selectAddressId,
    },
  };
}

// TODO: delete
export function xxx() {

}
