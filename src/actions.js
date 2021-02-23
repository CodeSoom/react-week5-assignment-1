import { getRegions } from './services/api';

export const GET_REGIONS = 'GET_REGIONS';
export const GET_REGIONS_SUCCESS = 'GET_REGIONS_SUCCESS';
export const GET_REGIONS_FAILURE = 'GET_REGIONS_FAILURE';

export function getRegionsThunk() {
  return async (dispatch) => {
    dispatch({ type: GET_REGIONS });
    try {
      const regions = await getRegions();
      dispatch({ type: GET_REGIONS_SUCCESS, payload: regions });
    } catch (error) {
      dispatch({ type: GET_REGIONS_FAILURE, payload: error });
    }
  };
}
