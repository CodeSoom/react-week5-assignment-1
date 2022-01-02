import { useDispatch, useSelector } from 'react-redux';
import { setCategory } from '../../stores/actions';

import Options from '../common/Options';

export default function CategoriesContainer() {
  const dispatch = useDispatch();
  const { categories, selectedCategoryId } = useSelector((state) => ({
    categories: state.categories,
    selectedCategoryId: state.category.id,
  }));

  const updateSelectedCategory = (category) => {
    dispatch(setCategory(category));
  };

  return (
    <Options
      options={categories}
      updateSelectedOption={updateSelectedCategory}
      selectedId={selectedCategoryId}
    />
  );
}
