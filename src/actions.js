import { fetchButtonData } from './services/api';

export function setButtonData({ sort, data }) {
  return {
    type: 'setButtonData',
    payload: {
      sort,
      data,
    },
  };
}

export function loadButtonData(sort) {
  return async (dispatch) => {
    const data = await fetchButtonData(sort);

    dispatch(setButtonData({
      sort,
      data,
    }));
  };
}
