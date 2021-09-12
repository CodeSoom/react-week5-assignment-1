import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { updateField, loadCategories } from '../store/reducer';

import CategoryList from '../presentational/CategoryList';

export default function CategoryContainer() {
  const dispatch = useDispatch();

  const { categories, selectedCategory } = useSelector((state) => state);

  const handleClick = ({ field, value }) => {
    dispatch(updateField({ field, value }));
  };

  useEffect(() => {
    dispatch(loadCategories());
  }, []);

  return (
    <CategoryList
      categories={categories}
      onClick={handleClick}
      selectedCategory={selectedCategory}
    />
  );
}
