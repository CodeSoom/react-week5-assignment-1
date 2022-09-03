import { useSelector } from 'react-redux';

import Categories from './Categories';

export default function CategoriesContainer({ onClick }) {
  const { categories } = useSelector((state) => ({
    categories: state.categories,
  }));

  return (
    <Categories
      categories={categories}
      onClick={onClick}
    />
  );
}
