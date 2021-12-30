import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import LocationContainer from './LocationContainer';
import CategoryContainer from './CategoryContainer';

import {
  loadLocations,
  loadCategories,
} from './action';

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadLocations());
    dispatch(loadCategories());
  }, []);

  return (
    <div>
      <h2>지역</h2>
      <LocationContainer />
      <br />
      <h2>분류</h2>
      <CategoryContainer />
    </div>
  );
}
