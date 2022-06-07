import { useSelector } from 'react-redux';

import Categories from '../component/Categories';

export default function CategoriesContainer() {
  const { categories } = useSelector((state) => ({
    categories: state.categories,
  }));

  return <Categories categories={categories} />;
}
