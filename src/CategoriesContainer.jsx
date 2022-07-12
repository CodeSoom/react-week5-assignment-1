import { useDispatch, useSelector } from 'react-redux';

import { setCategoryId } from './actions';

import CategoriesComponent from './Categories';

export default function CategoriesContainer() {
  const dispatch = useDispatch();

  const { categoryId, categories } = useSelector((state) => state);

  const handleClickSelectCategory = (id) => {
    dispatch(setCategoryId(id));
  };

  return (
    <CategoriesComponent
      categoryId={categoryId}
      categories={categories}
      onClickSelectCategory={handleClickSelectCategory}
    />
  );
}
