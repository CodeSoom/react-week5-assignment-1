import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import List from './List';
import { getRegionsThunk } from './actions';

function RegionsContainer() {
  const dispatch = useDispatch();
  const regions = useSelector((state) => state.regions);
  console.log(regions);
  useEffect(() => {
    dispatch(getRegionsThunk());
  }, []);

  function handleClick() {
    dispatch({ type: 'WATCH_THE_REGION', payload: 8 });
  }
  return (
    <div className="regions-container">
      <List list={regions} onClick={handleClick} />
    </div>
  );
}

export default RegionsContainer;
