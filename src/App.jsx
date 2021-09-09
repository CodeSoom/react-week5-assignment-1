import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  updateField, loadCategories, loadRegions, loadRestaurants,
} from './store/actions';

import RegionContainer from './container/RegionContainer';
import CategoryList from './presentational/CategoryList';
import RestaurantList from './presentational/RestaurantList';

export default function App() {
  const dispatch = useDispatch();
  const {
    categories,
    selectedRegion,
    selectedCategory,
    restaurants,
  } = useSelector((state) => state);

  const handleClick = ({ field, value }) => {
    dispatch(updateField({ field, value }));
  };

  const isEmpty = (param) => Object.keys(param).length === 0;

  useEffect(() => {
    dispatch(loadCategories());
    dispatch(loadRegions());
  }, []);

  useEffect(() => {
    if (isEmpty(selectedRegion) || isEmpty(selectedCategory)) {
      return;
    }

    dispatch(loadRestaurants({
      regionName: selectedRegion.name,
      categoryId: selectedCategory.id,
    }));
  }, [selectedRegion, selectedCategory]);

  return (
    <>
      <RegionContainer />
      <CategoryList
        categories={categories}
        onClick={handleClick}
        selectedCategory={selectedCategory}
      />
      <RestaurantList
        restaurants={restaurants}
      />
    </>
  );
}
