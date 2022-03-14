import { useDispatch, useSelector } from 'react-redux';
import { checkCategory } from './actions';
import Categories from './Categories';

export default function CategoriesContainer() {
  const dispatch = useDispatch();

  const { categories, checkedCategoryId } = useSelector((state) => ({
    categories: state.categories,
    checkedCategoryId: state.checkedCategoryId,
  }));

  function handleChangeSelectedCategory(event) {
    const categoryId = event.target.value;
    dispatch(checkCategory(categoryId));
  }

  return (
    <Categories
      categories={categories}
      checkedCategoryId={checkedCategoryId}
      onClick={handleChangeSelectedCategory}
    />
  );
}
