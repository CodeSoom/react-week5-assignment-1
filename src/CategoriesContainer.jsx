import { useSelector, useDispatch } from 'react-redux';

import {
  selectCategory,
  loadRestaurants,
} from './actions';

import { get } from './utils';

export default function CategoriesContainer() {
  const dispatch = useDispatch();

  const categories = useSelector(get('categories'));
  const selectedCategory = useSelector(get('selectedCategory'));

  function handleClickButton(categoryId) {
    dispatch(selectCategory(categoryId));
    dispatch(loadRestaurants());
  }

  return (
    <ul>
      {categories.map((category) => (
        <li key={category.id}>
          <button
            type="button"
            onClick={() => handleClickButton(category.id)}
          >
            {category.name}
            <>
              {selectedCategory && (
                category.id === selectedCategory.id ? '(V)' : null
              )}
            </>
          </button>
        </li>
      ))}
    </ul>
  );
}
