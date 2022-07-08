import { useDispatch, useSelector } from 'react-redux';

import { setCategoryId } from './actions';

import CategoriesComponent from './Categories';

export default function CategoriesContainer() {
  const dispatch = useDispatch();

  const { category, categories } = useSelector((state) => state);

  const handleClickSelectCategory = (id) => {
    dispatch(setCategoryId(id));
  };

  return (
    <CategoriesComponent
      category={category}
      categories={categories}
      onClickSelectCategory={handleClickSelectCategory}
    />
  );
}
