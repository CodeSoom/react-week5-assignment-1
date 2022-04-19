import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import InputContainer from '../containers/InputContainer';
import RestaurantContainer from '../containers/RestaurantContainer';
import CategoriesContainer from '../containers/CategoriesContainer';

import { loadCategories, loadRestaurants } from '../redux/actions';

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadCategories());
    dispatch(loadRestaurants());
  }, []);

  return (
    <>
      <h1>Restaurants</h1>
      <CategoriesContainer />
      <br />
      <RestaurantContainer />
      <InputContainer />
    </>
  );
}
