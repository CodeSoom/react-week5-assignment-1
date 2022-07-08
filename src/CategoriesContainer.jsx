import { useDispatch, useSelector } from 'react-redux';

import { setCategory } from './actions';

import CategoriesComponent from './Categories';

export default function CategoriesContainer() {
  const dispatch = useDispatch();

  const { category, categories } = useSelector((state) => state);

  const handleClickSelectCategory = (e) => {
    dispatch(setCategory(e.target.name));
  };

  return (
    <CategoriesComponent
      category={category}
      categories={categories}
      onClickSelectCategory={handleClickSelectCategory}
    />
  );
}
