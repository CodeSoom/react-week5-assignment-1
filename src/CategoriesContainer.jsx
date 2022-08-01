import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getCategories, setCategory } from './actions';

import Categories from './Categories';

export default function CategoriesContainer() {
  const { categories, category } = useSelector((state) => (
    { categories: state.categories, category: state.category }
  ));

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories());
  }, []);

  const handleClickCategory = (categoryValue) => dispatch(setCategory(categoryValue));

  return (
    <Categories category={category} categories={categories} onClickCategory={handleClickCategory} />
  );
}
