import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import CategoriesContainer from './containers/CategoriesContainer';

import RegionContainer from './containers/RegionsContainer';

import RestaurantsContainer from './containers/RestaurantsContainer';

import { loadCategories, loadRestaurants, loadRegions } from './actions';

export default function App() {
  const dispatch = useDispatch();

  const { restaurant } = useSelector((state) => ({
    restaurant: state.restaurant,
  }));

  useEffect(() => {
    dispatch(loadCategories());
    dispatch(loadRegions());
  }, []);

  useEffect(() => {
    const { categoryId, region } = restaurant;
    if (categoryId && region) {
      dispatch(loadRestaurants(region, categoryId));
    }
  }, [restaurant]);

  return (
    <div>
      <RegionContainer restaurant={restaurant} />
      <CategoriesContainer restaurant={restaurant} />
      <RestaurantsContainer />
    </div>
  );
}
