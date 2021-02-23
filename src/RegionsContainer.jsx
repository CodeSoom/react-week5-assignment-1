import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

// import { getRegions } from './services/api';

function RegionsContainer() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: 'GET_REGIONS' });
  }, []);
  return (
    <div className="regions-container">RegionsContainer</div>
  );
}

export default RegionsContainer;
