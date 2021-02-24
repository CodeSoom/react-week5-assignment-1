export const GET_REGIONS = 'GET_REGIONS';

export const GET_CATEGORIES = 'GET_CATEGORIES';

export function watchRegion(id) {
  return { type: 'WATCH_THE_REGION', payload: id };
}

export function createThunk(actionType, api) {
  return async (dispatch) => {
    dispatch({ type: actionType });
    try {
      const data = await api();
      dispatch({ type: `${actionType}_SUCCESS`, payload: data });
    } catch (error) {
      dispatch({ type: `${actionType}_FAILURE`, payload: error });
    }
  };
}
