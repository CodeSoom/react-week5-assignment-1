import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import LocationContainer from './LocationContainer';

import { setLocation } from './action';

function loadLocations({ dispatch }) {
  const locations = [];

  dispatch(setLocation(locations));
}

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    loadLocations({ dispatch });
  }, []);

  return (
    <div>
      <h2>지역</h2>
      <LocationContainer />
    </div>
  );
}
