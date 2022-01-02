import { useSelector } from 'react-redux';
import Categories from './Categories';

export default function CategoriesContainer() {
  const { categories } = useSelector((state) => state);

  return <Categories categories={categories} />;
}
