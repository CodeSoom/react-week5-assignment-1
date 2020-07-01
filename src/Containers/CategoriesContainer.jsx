import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Categories from '../Components/Categories';
import { loadRestaurantsCategories, updateSearchCatetory } from '../actions';

export default function CategoriesContainer() {
  const dispatch = useDispatch();
  const { categories, searchQuery } = useSelector((state) => ({
    categories: state.categories,
    searchQuery: state.searchQuery,
  }));

  const handleClickCategory = (categoryId) => {
    dispatch(updateSearchCatetory(categoryId));
  };

  useEffect(() => {
    dispatch(loadRestaurantsCategories());
  }, []);
  return (
    <Categories
      categories={categories}
      selectedCategoryId={searchQuery.categoryId}
      handleClickCategory={handleClickCategory}
    />
  );
}
