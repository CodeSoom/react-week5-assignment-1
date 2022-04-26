import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { loadInitialData } from './actions';
import CategoriesContainer from './containers/CategoriesContainer';
import RegionsContainer from './containers/RegionsContainer';
import RestaurantContainer from './containers/RestaurantContainer';

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadInitialData());
  });

  return (
    <div>
      <RegionsContainer />
      <CategoriesContainer />
      <RestaurantContainer />
    </div>
  );
}
