import { useSelector } from 'react-redux';

import Categories from './Categories';

export default function CategoriesContainer({ onClick }) {
  const { categories, filter } = useSelector((state) => ({
    categories: state.categories,
    filter: state.filter,
  }));

  return (
    <Categories
      categories={categories}
      onClick={onClick}
      filter={filter.category}
    />
  );
}
