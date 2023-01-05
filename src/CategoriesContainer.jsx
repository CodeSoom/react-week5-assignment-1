import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Categories from './Categories';
import { checkCategory, loadCategories } from './store/actions';

const CategoriesContainer = () => {
  const { categories } = useSelector((state) => ({
    categories: state.categories,
  }));

  const dispatch = useDispatch();

  const updateCheckedCategory = (checkedCategoryId) => {
    dispatch(checkCategory(checkedCategoryId));
  };

  useEffect(() => {
    dispatch(loadCategories());
  }, []);

  return (
    <Categories categories={categories} onUpdateCategory={updateCheckedCategory} />
  );
};

export default CategoriesContainer;
