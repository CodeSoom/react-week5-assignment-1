import { useSelector } from 'react-redux';

import Category from '../components/Category';

export default function CategoryContainer() {
  const { categories } = useSelector((state) => ({
    categories: state.categories,
  }));
  return (
    <Category
      categories={categories}
    />
  );
}
