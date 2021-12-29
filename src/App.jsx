import { useEffect } from 'react';

import { useDispatch } from 'react-redux';

import restaurants from '../fixtures/fixture';

import { setRestaurants } from './action';

import RestaurantsContainer from './RestaurantsContainer';

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setRestaurants(restaurants));
  }, []);

  return (
    <div>
      <h1>Restaurants</h1>
      <RestaurantsContainer />
    </div>
  );
}
