import { useDispatch, useSelector } from 'react-redux';
import { selectCategory, loadRestaurants } from '../actions';
import { get } from '../utils/utils';

export default function CategoriesContainer() {
  const dispatch = useDispatch();

  const categories = useSelector(get('categories'));
  const selectedCategory = useSelector(get('selectedCategory'));

  function handleClick(categoryId) {
    dispatch(selectCategory(categoryId));
    dispatch(loadRestaurants());
  }

  return (
    <ul>
      {categories.map(({ id, name }) => (
        <li key={id}>
          <button type="button" onClick={() => handleClick(id)}>
            {name}
            {selectCategory && id === selectedCategory ? '(V)' : null}
          </button>
        </li>
      ))}
    </ul>
  );
}
