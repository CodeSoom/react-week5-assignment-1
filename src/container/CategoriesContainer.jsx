import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import Categories from '../presentational/Categories';

import { loadCategories, updateCheckedElement } from '../actions';

export default function CategoriesContainer() {
  const dispatch = useDispatch();

  const { checkedCategory, categories } = useSelector((state) => ({
    checkedCategory: state.checkedCategory,
    categories: state.categories,
  }));

  useEffect(() => {
    dispatch(loadCategories());
  }, []);

  function handleClickCategory(name, value) {
    dispatch(updateCheckedElement(name, value));
  }

  return (
    <Categories
      categories={categories}
      handleClickCategory={handleClickCategory}
      checkedElement={checkedCategory}
    />
  );
}
