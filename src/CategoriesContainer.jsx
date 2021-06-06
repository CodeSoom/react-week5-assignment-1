import { useDispatch, useSelector } from 'react-redux';

import {
  selectCategory,
} from './actions';

import { get } from './utils';

export default function CategoriesContainer() {
  const dispatch = useDispatch();

  const categories = useSelector(get('categories'));
  const selectedCategory = useSelector(get('selectedCategory'));
  // const { categories, selectedCategory } = useSelector((state) => ({
  //   categories: state.categories,
  //   selectedCategory: state.selectedCategory,
  // }));

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
