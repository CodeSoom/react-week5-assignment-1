import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { updateRestaurant, loadRestaurants, loadRestaurantsName } from './actions';
import CategoryList from './CategoryList';

const CategoryContainer = () => {
  const dispatch = useDispatch();

  const { categories, category } = useSelector((state) => ({
    category: state.category,
    categories: state.categories,
  }));

  useEffect(() => {
    dispatch(loadRestaurants('categories'));
  }, []);

  const handleClickButton = (stateId) => {
    dispatch(updateRestaurant(stateId));
    dispatch(loadRestaurantsName());
  };

  return (
    <>
      <CategoryList
        categories={categories}
        onSelectCategoryClick={handleClickButton}
        categoryId={category}
      />
    </>
  );
};

export default CategoryContainer;
