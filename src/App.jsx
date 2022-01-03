import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import LocationContainer from './LocationContainer';
import CategoryContainer from './CategoryContainer';
import RestaurantContainer from './RestaurantContainer';

import {
  loadLocations,
  loadCategories,
  loadRestaurants,
} from './action';

export default function App() {
  const dispatch = useDispatch();

  const { category, location } = useSelector((state) => ({
    category: state.category,
    location: state.location,
  }));

  useEffect(() => {
    dispatch(loadLocations());
    dispatch(loadCategories());
  }, []);

  useEffect(() => {
    dispatch(loadRestaurants({ location: location.name, categoryId: category.id }));
  }, [location, category]);

  return (
    <div>
      <h2>지역</h2>
      <LocationContainer />
      <br />
      <h2>분류</h2>
      <CategoryContainer />
      <RestaurantContainer />
    </div>
  );
}
