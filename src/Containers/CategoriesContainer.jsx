import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Categories from '../Components/Categories';
import { loadCategories, setCategoryId, loadRestaurants } from '../actions';

export default function CategoriesContainer() {
  const dispatch = useDispatch();
  const { categories, categoryId, regionName } = useSelector((state) => ({
    categories: state.categories,
    categoryId: state.categoryId,
    regionName: state.regionName,
  }));

  const handleClickCategory = (id) => {
    dispatch(setCategoryId(id));
  };

  useEffect(() => {
    dispatch(loadCategories());
  }, []);

  useEffect(() => {
    if (regionName && categoryId) {
      dispatch(loadRestaurants(regionName, categoryId));
    }
  }, [categoryId]);

  return (<Categories selected={categoryId} categories={categories} handleClickCategory={handleClickCategory} />);
}
