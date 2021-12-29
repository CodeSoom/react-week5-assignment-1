import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import LocationContainer from './LocationContainer';

import { loadLocations } from './action';

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadLocations());
  }, []);

  return (
    <div>
      <h2>지역</h2>
      <LocationContainer />
    </div>
  );
}
