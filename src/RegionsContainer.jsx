import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import List from './List';

function RegionsContainer() {
  const dispatch = useDispatch();
  const regions = useSelector((state) => state.regions);
  useEffect(() => {
    dispatch({ type: 'GET_REGIONS' });
  }, []);
  return (
    <div className="regions-container">
      <List list={regions} />
    </div>
  );
}

export default RegionsContainer;
