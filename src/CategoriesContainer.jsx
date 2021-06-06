import { useDispatch, useSelector } from 'react-redux';

import {
  selectCategory,
} from './actions';

export default function CategoriesContainer() {
  const dispatch = useDispatch();

  const { categories, selectedCategory } = useSelector((state) => ({
    categories: state.categories,
    selectedCategory: state.selectedCategory,
  }));

  function handleClick(categoryId) {
    dispatch(selectCategory(categoryId));
  }

  return (
    <ul>
      {categories.map(({ id, name }) => (
        <li key={id}>
          <button
            type="button"
            onClick={() => handleClick(id)}
          >
            {name}
            {selectedCategory && id === selectedCategory.id ? '(V)' : null}
          </button>
        </li>
      ))}
    </ul>
  );
}
