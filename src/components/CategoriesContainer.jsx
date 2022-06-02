import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { loadCategories } from '../redux/actions';

export default function CategoriesContainer() {
  const { categories } = useSelector((state) => ({
    categories: state.categories,
  }));

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadCategories());
  }, []);

  return (
    <div>
      <ul>
        <li><button type="button">한식</button></li>
        <li><button type="button">중식</button></li>
      </ul>
    </div>
  );
}
