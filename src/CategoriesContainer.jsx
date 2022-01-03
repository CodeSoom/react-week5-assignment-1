import { useDispatch, useSelector } from 'react-redux';

import { get } from './utils';

import { loadRestaurants, selectCategory } from './actions';

import Categories from './Categories';

export default function CategoriesContainer() {
  const dispatch = useDispatch();
  const categories = useSelector(get('categories'));
  const category = useSelector(get('category'));

  const handleClick = (categoryId) => {
    dispatch(selectCategory({ categoryId }));
    dispatch(loadRestaurants());
  };

  return <Categories categories={categories} category={category} handleClick={handleClick} />;
}
