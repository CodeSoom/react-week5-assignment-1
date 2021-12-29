import { useDispatch, useSelector } from 'react-redux';
import { setCategory } from '../../stores/actions';

import Options from '../common/Options';

export default function CategoriesContainer() {
  const dispatch = useDispatch();
  const { categories, selectedCategoryId } = useSelector((state) => ({
    categories: state.categories,
    selectedCategoryId: state.categoryId,
  }));

  const updateSelectedCategory = (categoryId) => {
    dispatch(setCategory(categoryId));
  };

  return (
    <Options
      options={categories}
      updateSelectedOption={updateSelectedCategory}
      selectedId={selectedCategoryId}
    />
  );
}
