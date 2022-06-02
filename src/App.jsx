import { useEffect } from 'react';

import { useDispatch } from 'react-redux';
import RestaurantsContainer from './RestaurantsContainer';

import { setRestaurants } from './actions';

import RestaurantsCreateContainer from './RestaurantsCreateContainer';

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setRestaurants([]));
  }, []);

  return (
    <div>
      <h1>Restaurants</h1>
      <RestaurantsContainer />
      <RestaurantsCreateContainer />
    </div>
  );
}
