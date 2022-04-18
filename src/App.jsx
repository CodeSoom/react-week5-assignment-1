import { useEffect } from 'react';

import { useDispatch } from 'react-redux';

import LocationsContainer from './LocationsContainer';
import CategoriesContainer from './CategoriesContainer';

import {
  setLocations,
} from './actions';

import locations from '../fixtures/locations';

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setLocations(locations));
  }, []);

  return (
    <>
      <h1>Restaurants</h1>
      <h2>Location</h2>
      <LocationsContainer />
      <h2>Category</h2>
      <CategoriesContainer />
      <ul>
        <li>
          양천주가
        </li>
      </ul>
    </>
  );
}
