import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import List from './List';
import { watchRegion, createThunk, GET_REGIONS } from './actions';
import { getRegions } from './services/api';

function RegionsContainer() {
  /*
  TODO: dispatch, selector useEffect enter 처리로 구분할 것
  enter
  */
  const dispatch = useDispatch();
  const regions = useSelector((state) => state.regions);
  useEffect(() => {
    dispatch(createThunk(GET_REGIONS, getRegions));
  }, []);
  /*

TODO
watchRegion -> selectRegion 으로 변경할 것

*/
  function handleClick(region) {
    dispatch(watchRegion(region.name));
  }
  return (
    <div>
      <List list={regions} onClick={handleClick} />
    </div>
  );
}

export default RegionsContainer;
