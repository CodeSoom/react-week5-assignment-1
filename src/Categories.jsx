import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Button from './Button';

import {
  loadCategories,
  loadRestaurants,
  selectCategory,
} from './actions';

import { get } from './utils';

export default function Categories() {
  const dispatch = useDispatch();
  const categories = useSelector(get('categories'));
  const selectedCategory = useSelector(get('selectedCategory'));
  // util을 사용하는 방법 활용
  // const categories = useSelector((state) => state.categories);
  // const selectedCategory = useSelector((state) => state.selectedCategory);

  useEffect(() => {
    dispatch(loadCategories());
  }, []);

  function clickHandler(categoryId) {
    dispatch(selectCategory(categoryId));
    dispatch(loadRestaurants());
  }

  return (
    <ul>
      {categories.map((category) => (
        <li key={category.id}>
          <Button id={category.id} onClick={() => clickHandler(category.id)}>
            {category.name}
            {selectedCategory ? (
              <>
                { category.id === selectedCategory.id ? '(V)' : null }
              </>
            ) : null}
          </Button>
        </li>
      ))}
    </ul>
  );
}
