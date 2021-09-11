import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import Categories from '../presentational/Categories';

import { loadCategories, updateCheckedItem } from '../actions';

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
    dispatch(updateCheckedItem(name, value));
  }

  return (
    <Categories
      categories={categories}
      handleClickCategory={handleClickCategory}
      checkedCategory={checkedCategory}
    />
  );
}
