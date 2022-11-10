import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { loadCategories } from './actions';

import Categories from './Categories';

export default function CategoriesContainer() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadCategories());
  }, []);

  const { categories } = useSelector((state) => ({
    categories: state.categories,
  }));

  const handleClick = (id) => {
    console.log(id);
  };

  return (
    <Categories categories={categories} onClick={handleClick} />
  );
}
