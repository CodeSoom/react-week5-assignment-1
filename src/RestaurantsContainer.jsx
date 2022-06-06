import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loadRestaurants } from './action';
import Restaurants from './Restaurants';

export default function RestaurantsContainer() {
  const dispatch = useDispatch();

  const { region, category, restaurants } = useSelector((state) => ({
    region: state.region,
    category: state.category,
    restaurants: state.restaurants,
  }));

  useEffect(() => {
    dispatch(loadRestaurants(region, category));
  });

  return <Restaurants restaurants={restaurants} />;
}
