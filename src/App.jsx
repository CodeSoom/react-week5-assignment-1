import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { setRestaurants, setRegions, loadCategories } from './action';

import RegionsContainer from './RegionsContainer';
import CategoriesContainer from './CategoriesContainer';
import RestaurantsContainer from './RestaurantsContainer';

function loadRegions({ dispatch = () => {} }) {
  const regions = [];

  dispatch(setRegions(regions));
}

function loadRestaurants({ dispatch = () => {} }) {
  const restaurants = [];
  dispatch(setRestaurants(restaurants));
}

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadCategories());
    dispatch(loadRestaurants());
    loadRegions({ dispatch });
  }, []);

  return (
    <>
      <h1>Restaurant Information</h1>
      <RegionsContainer />
      <CategoriesContainer />
      <RestaurantsContainer />
    </>
  );
}
