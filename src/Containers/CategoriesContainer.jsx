import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Categories from '../Components/Categories';
import { loadCategories } from '../actions';

export default function CategoriesContainer() {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories);
  const handleClickCategory = (categoryId) => {
    console.log(categoryId);
  };
  useEffect(() => {
    dispatch(loadCategories());
  }, []);

  return (<Categories categories={categories} handleClickCategory={handleClickCategory} />);
}
