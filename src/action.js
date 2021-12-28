// ToDo: 두번째, 세번째 값 undefined 해결해야함~~
export function changeNameValue(nameValue) {
  return {
    type: 'changeNameValue',
    payload: {
      nameValue,
    },
  };
}

export function changeCategoryValue(categoryValue) {
  return {
    type: 'changeCategoryValue',
    payload: {
      categoryValue,
    },
  };
}

export function changePlaceValue(placeValue) {
  return {
    type: 'changePlaceValue',
    payload: {
      placeValue,
    },
  };
}

export function clickAdd() {
  return {
    type: 'clickAdd',
  };
}
