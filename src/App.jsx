import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { setRestaurants, setCategories, setRegions } from './action';

import RegionsContainer from './RegionsContainer';
import CategoriesContainer from './CategoriesContainer';
import RestaurantsContainer from './RestaurantsContainer';

import { fetchCategories } from './services/api';

function loadRegions({ dispatch = () => {} }) {
  const regions = [];

  dispatch(setRegions(regions));
}

async function loadCategories({ dispatch = () => {} }) {
  const categories = await fetchCategories();

  dispatch(setCategories(categories));
}

function loadRestaurants({ dispatch = () => {} }) {
  const restaurants = [];
  dispatch(setRestaurants(restaurants));
}

export default function App() {
  const dispatch = useDispatch();


  useEffect(() => {
    loadCategories({ dispatch });
    loadRegions({ dispatch });
    loadRestaurants({ dispatch });
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
