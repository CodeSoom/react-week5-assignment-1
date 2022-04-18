import { useSelector } from 'react-redux';

import Categories from './Categories';

export default function CategoriesContainer() {
  const { categories } = useSelector((selector) => ({
    categories: selector.categories,
  }));

  return (
    <Categories categories={categories} />
  );
}
