import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Categories from '../Components/Categories';
import { loadCategories, setCategoryId } from '../actions';

export default function CategoriesContainer() {
  const dispatch = useDispatch();
  const { categories, categoryId } = useSelector((state) => ({
    categories: state.categories,
    categoryId: state.categoryId,
  }));

  const handleClickCategory = (id) => {
    dispatch(setCategoryId(id));
  };

  useEffect(() => {
    dispatch(loadCategories());
  }, []);

  return (<Categories selected={categoryId} categories={categories} handleClickCategory={handleClickCategory} />);
}
