import { fetchRegions } from './services/api';

export function loadRegions() {
    return async (dispatch) => {
      const regions = await fetchRegions();
      dispatch(setRegions(regions));
    };
  }

  //TODO : delete it!!
export function xxx(){

}